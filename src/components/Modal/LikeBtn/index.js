import {runTransaction, ref} from "firebase/database";
import React, {useEffect, useState} from "react";
import {firebasedatabase} from "../../../Firebase/firebase";
import {useRecoilValue} from "recoil";
import {userIp} from "../../../recoil/store";
import LikeBtnView from "./LikeBtnView";

const updateLikeState = (ip, dbRef) => {
  const userIp = ip.split(".").join("");
  runTransaction(dbRef, (post) => {
    if (post) {
      if (post.likes && post.likes[userIp]) {
        post.likeCount--;
        post.likes[userIp] = null;
      } else {
        post.likeCount++;
        if (!post.likes) {
          post.likes = {};
        }
        post.likes[userIp] = true;
      }
    }

    return post;
  });
};

const LikeBtn = ({billId, userLike}) => {
  const [likeState, setLikeState] = useState(false);
  const dbRef = ref(firebasedatabase, `billId/${billId}`);
  const ip = useRecoilValue(userIp);

  useEffect(() => {
    setLikeState(userLike);
  }, [userLike]);

  const clickHandler = () => {
    setLikeState((prev) => !prev);
    updateLikeState(ip, dbRef);
  };

  return <LikeBtnView likeState={likeState} clickHandler={clickHandler} />;
};

export default LikeBtn;
