import React, {useState, useEffect} from "react";
import {onSnapshot, collection} from "firebase/firestore";
import {dbService} from "../../Firebase/firebase";

function TotalReplyCount({billId}) {
  const [commentsCount, setCommentsCount] = useState(0);
  useEffect(() => {
    onSnapshot(collection(dbService, `${billId}`), (snapshot) => {
      const realtimeComments = snapshot.docs.map((doc) => doc.data());
      setCommentsCount(realtimeComments.length);
    });
  });

  return <>{commentsCount}</>;
}

export default TotalReplyCount;
