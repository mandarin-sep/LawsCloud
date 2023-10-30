import React from "react";
import styled from "styled-components";
import DeleteIcon from "../../assests/icons/close.png";

export default function ReplyList({replyData, deleteHandler}) {
  return (
    <ReplyArea>
      {replyData.map((data) => {
        return (
          <Reply key={data.key}>
            <span className="reply-id">
              {data.creatorId + " "}({data.ip})
            </span>
            <ReplyText>{data.text}</ReplyText>
            <span onClick={() => deleteHandler(data)}>
              <DeleteButton src={DeleteIcon} alt="delete" />
            </span>
          </Reply>
        );
      })}
    </ReplyArea>
  );
}

const ReplyArea = styled.div`
  width: min(100%, 1200px);
  border: 1px solid #000;
  border-width: 3px 0 0 0;
  padding: 12px 0;
  font-weight: 500;
  .reply-id {
    width: 200px;
    margin-left: 30px;
    color: #969696;
    overflow-wrap: break-word;
  }
`;

const Reply = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  margin: auto 0;
  display: flex;
  width: min(100%, 1200px);
  justify-content: space-between;
`;

const ReplyText = styled.div`
  width: min(100%, 820px);
  color: #000;
  overflow-wrap: break-word;
`;

const DeleteButton = styled.img`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  margin-right: 30px;
  padding: 6px;
  cursor: pointer;

  transition: background-color 0.2s;
  :hover {
    background-color: #e6e6e6;
  }
`;
