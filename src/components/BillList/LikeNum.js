import {child, get, ref} from "firebase/database";
import {useState} from "react";
import {firebasedatabase} from "../../Firebase/firebase";
import React from "react";

export default function LikeNum({billId}) {
  const [likeCount, setLikeCount] = useState(0);
  const dbRef = ref(firebasedatabase);
  get(child(dbRef, `billId/${billId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      setLikeCount(snapshot.val().likeCount);
    } else {
      setLikeCount(0);
    }
  });

  return <div>{likeCount}</div>;
}
