import React, {useEffect, useState} from "react";
import {onSnapshot, collection, addDoc, serverTimestamp, deleteDoc, doc} from "firebase/firestore";
import {dbService} from "../../Firebase/firebase";
import {useRecoilValue} from "recoil";
import {userIp} from "../../recoil/store";
import {v4 as uuidv4} from "uuid";
import ReplyInputView from "./ReplyInputView";
import ReplyList from "./ReplyList";

const ReplyContainer = ({billId, billAge}) => {
  const [replyInfo, setReplyInfo] = useState({
    id: "",
    password: "",
    content: "",
  });

  const [replyData, setReplyData] = useState([]);
  const ip = useRecoilValue(userIp);

  useEffect(() => {
    onSnapshot(collection(dbService, `${billId}`), (sanpshot) => {
      const replyArray = sanpshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(replyArray);
      setReplyData(replyArray);
    });
  }, [billId]);

  const changeHandler = (e) => {
    const {
      target: {name, value},
    } = e;
    if (name === "id") {
      setReplyInfo({
        ...replyInfo,
        id: value,
      });
    } else if (name === "password") {
      setReplyInfo({
        ...replyInfo,
        password: value,
      });
    } else if (name === "content") {
      setReplyInfo({
        ...replyInfo,
        content: value,
      });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await addDoc(collection(dbService, `${billId}`), {
      text: replyInfo.content,
      createdAt: serverTimestamp(),
      creatorId: replyInfo.id,
      password: replyInfo.password,
      ip: ip.split(".").slice(0, 2).join("."),
      key: uuidv4(),
      age: Number(billAge),
    });
    setReplyInfo({
      id: "",
      password: "",
      content: "",
    });
  };

  const deleteHandler = async (data) => {
    const ok = window.prompt("비밀번호를 입력하세요");
    if (ok === data.password) {
      console.log("hi");
      await deleteDoc(doc(dbService, `${billId}`, `${data.id}`));
    } else {
      window.alert("비밀번호가 다릅니다");
    }
  };

  return (
    <>
      <ReplyList replyData={replyData} deleteHandler={deleteHandler} />
      <ReplyInputView
        password={replyInfo.password}
        content={replyInfo.content}
        id={replyInfo.id}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default ReplyContainer;
