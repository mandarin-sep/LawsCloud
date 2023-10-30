import React, {useState} from "react";
import {StyledBillTable, StyledBillThead, StyledBillTbody} from "../../style/StyledBillsList";
import ExcelFilterList from "./ExcelFilterList";
import ModalContainer from "../Modal/ModalContainer";
import TotalViews from "../TotalViews/TotalViews";
import LikeNum from "../likeButton/LikeNum";
import {set, ref, get, child, update} from "firebase/database";
import {firebasedatabase} from "../../Firebase/firebase";
import {useRecoilState, useRecoilValue} from "recoil";
import {userIp, userLikeState, excelFilterState, billListState, pageState, modalState} from "../../recoil/store";

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

  const setView = (data) => {
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

  const getIpLikeInfo = (data) => {
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

  const headerMeta = ["의안명", ["제안자", "제안 일자"], ["상임위원회", excelFilter], "조회수", "추천수"];
  return (
    <>
      <StyledBillTable>
        <StyledBillThead>
          {headerMeta.map((data, idx) => (
            <div key={idx} className="header" onClick={idx === 2 ? () => setToggle(!toggle) : () => {}}>
              {idx === 1
                ? [
                    data[0],
                    <span key={idx} className="subHeader">
                      ({data[1] === "" ? "전체" : data[1]})
                    </span>,
                  ]
                : idx === 2
                ? [
                    data[0],
                    <span key={idx} className="subHeader">
                      ({data[1] === "" ? "전체" : data[1]})
                    </span>,
                  ]
                : data}
              {idx === 2 && <ExcelFilterList toggle={toggle} toggleHandler={toggleHandler} />}
            </div>
          ))}
        </StyledBillThead>
        <StyledBillTbody>
          {billList ? (
            billList.map((data, idx) => (
              <div key={idx} className="item-area">
                <div
                  className="item"
                  onClick={() => {
                    setModalOpen(!modalOpen);
                    setBillsInformation(data);
                    setView(data);
                    getIpLikeInfo(data);
                    window.scrollTo(0, 0);
                  }}>
                  {data.BILL_NAME}
                </div>
                <div className="item">
                  {data.PROPOSER}
                  <br />
                  {data.PROPOSE_DT}
                </div>
                <div className="item">{data.COMMITTEE ? data.COMMITTEE : "소속 없음"}</div>
                <div className="item">
                  <TotalViews billId={data.BILL_ID} inModal={false} />
                </div>
                <div className="item">
                  <LikeNum billId={data.BILL_ID} />
                </div>
              </div>
            ))
          ) : (
            <div>loading...</div>
          )}
        </StyledBillTbody>
      </StyledBillTable>

      {modalOpen && <ModalContainer billsInformation={billsInformation} />}
    </>
  );
};

export default BillsList;
