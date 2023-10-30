import React from "react";
import styled from "styled-components";

export default function ReplyInputView({password, content, id, changeHandler, submitHandler}) {
  return (
    <>
      <ReplyArea onSubmit={submitHandler}>
        <UserInfoArea>
          <ReplyId type="text" name="id" placeholder="ID" required value={id} onChange={changeHandler}></ReplyId>
          <ReplyPassword
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={changeHandler}></ReplyPassword>
        </UserInfoArea>
        <InputReply
          type="text"
          name="content"
          placeholder="이 법안에 대해 어떻게 생각하세요?"
          required
          value={content}
          onChange={changeHandler}></InputReply>
        <SubmitButton type="submit" value="댓글 작성" />
      </ReplyArea>
    </>
  );
}

const UserInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 0;
`;

const ReplyArea = styled.form`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: baseline;
  margin: 0;
  padding: 15px 30px 70px 30px;
  width: min(100%, 1200px);
  border-top: 3px solid black;
`;

const ReplyId = styled.input`
  width: 192px;
  height: 36px;
  margin-bottom: 10px;
  padding-left: 10px;

  font-size: 16px;
  color: #000000;
  ::placeholder {
    color: #969696;
  }
  border: 1px solid #c6c6c6;
`;

const ReplyPassword = styled.input`
  width: 192px;
  height: 36px;
  padding-left: 10px;

  font-size: 16px;
  color: #000000;
  ::placeholder {
    color: #969696;
  }
  border: 1px solid #c6c6c6;
`;

const InputReply = styled.textarea`
  width: 900px;
  height: 140px;
  resize: none;
  padding-left: 10px;
  padding-top: 10px;
  border: 1px solid #c6c6c6;

  font-size: 16px;
  color: #000000;
  ::placeholder {
    color: #969696;
  }
`;

const SubmitButton = styled.input`
  position: absolute;
  bottom: 20px;
  right: 30px;
  width: 92px;
  height: 36px;

  color: white;
  font-weight: 600;
  font-size: 14px;

  background: #000000;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  transition: background-color 0.2s;

  :hover {
    background-color: #565656;
  }
`;
