import React, {useState} from "react";
import BillListView from "./BillListView";
import {set, ref, get, child, update} from "firebase/database";
import {firebasedatabase} from "../../Firebase/firebase";
import {useRecoilState, useRecoilValue} from "recoil";
import {userIp, userLikeState, excelFilterState, billListState, pageState, modalState} from "../../recoil/store";

const setView = (data, viewCount, setViewCount) => {
  const firebaseRef = ref(firebasedatabase, "billId/" + data.BILL_ID);
  get(child(ref(firebasedatabase), "billId/" + data.BILL_ID)).then((snapshot) => {
    if (snapshot.exists()) {
      update(ref(firebasedatabase, `billId/${data.BILL_ID}`), {
        count: snapshot.val().count + 1,
      });
    } else {
      set(firebaseRef, {
        name: data.BILL_NAME,
        count: viewCount + 1,
        likeCount: 0,
      });
    }
  });

  setViewCount(0);
};

const getIpLikeInfo = (data, ip, setLikeState) => {
  const firebaseRef = ref(firebasedatabase);
  const userIp = ip.split(".").join("");
  get(child(firebaseRef, "billId/" + data.BILL_ID)).then((snapshot) => {
    if (snapshot.exists() && snapshot.val().likes) {
      const data = snapshot.val().likes[userIp];
      setLikeState(data);
    } else {
      setLikeState(false);
    }
  });
};

const BillsList = () => {
  const [billsInformation, setBillsInformation] = useState({});
  const [viewCount, setViewCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const billList = useRecoilValue(billListState);
  const excelFilter = useRecoilValue(excelFilterState);
  const ip = useRecoilValue(userIp);
  const [, setExcelFilter] = useRecoilState(excelFilterState);
  const [, setPage] = useRecoilState(pageState);
  const [_likeState, setLikeState] = useRecoilState(userLikeState);
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  const toggleHandler = (e) => {
    setPage(1);
    setToggle(!toggle);
    setExcelFilter(e.target.innerHTML === "전체" ? "" : e.target.innerHTML);
  };

  const clickHandler = (data) => {
    setModalOpen(!modalOpen);
    setBillsInformation(data);
    setView(data, viewCount, setViewCount);
    getIpLikeInfo(data, ip, setLikeState);
    window.scrollTo(0, 0);
  };

  const headerMeta = ["의안명", ["제안자", "제안 일자"], ["상임위원회", excelFilter], "조회수", "추천수"];
  return (
    <>
      <BillListView
        headerMeta={headerMeta}
        setToggle={setToggle}
        toggle={toggle}
        toggleHandler={toggleHandler}
        billList={billList}
        clickHandler={clickHandler}
        modalOpen={modalOpen}
        billsInformation={billsInformation}
      />
    </>
  );
};

export default BillsList;
