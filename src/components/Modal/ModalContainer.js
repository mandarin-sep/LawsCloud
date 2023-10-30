import React, {useEffect} from "react";

import {useRecoilState, useRecoilValue} from "recoil";
import {userLikeState, userIp} from "../../recoil/store";
import {get, child, ref} from "firebase/database";
import {firebasedatabase} from "../../Firebase/firebase";
import ModalView from "./ModalView";

const getLikeState = ({billId, ip, setLikeState}) => {
  const dbRef = ref(firebasedatabase);

  get(child(dbRef, `billId/${billId}`)).then((snapshot) => {
    if (snapshot.exists() && snapshot.val().likes) {
      setLikeState(snapshot.val().likes[ip]);
    } else {
      setLikeState(false);
    }
  });
};

function ModalContainer({billsInformation}) {
  const [likeState, setLikeState] = useRecoilState(userLikeState);
  const ip = useRecoilValue(userIp);
  const stringUserIp = ip.split(".").join("");

  useEffect(() => {
    getLikeState({billId: billsInformation.BILL_ID, ip: stringUserIp, setLikeState});
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <>
      <ModalView billsInformation={billsInformation} likeState={likeState} />
    </>
  );
}

export default ModalContainer;
