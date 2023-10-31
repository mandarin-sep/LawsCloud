import React from "react";
import styled from "styled-components";
import LikeImg from "../../../assests/icons/heart.png";
import EmptyLikeImg from "../../../assests/icons/EmptyHeart.png";

const LikeBtnView = ({likeState, clickHandler}) => {
  return (
    <div className="like-icon">
      {likeState ? (
        <HeartButton type="checkbox" onClick={clickHandler}>
          <HeartImg src={LikeImg} alt="하트" />
        </HeartButton>
      ) : (
        <HeartButton type="checkbox" onClick={clickHandler}>
          <HeartImg src={EmptyLikeImg} alt="빈하트" />
        </HeartButton>
      )}
    </div>
  );
};

export default LikeBtnView;

const HeartButton = styled.button`
  display: flex;
  align-items: center;

  border: 0;
  outline: 0;
  background-color: white;
  transform: translateY(1px);
`;

const HeartImg = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 2px;

  cursor: pointer;

  transition: all 0.2s;

  :hover {
    width: 26px;
    height: 26px;
    margin-left: 0;
    transform: translateX(1px);
  }
`;
