import React from "react";
import ModalPortal from "./ModalPortal";
import BillsContents from "../BillsContents/BillsContents";
import TotalComments from "../TotalComments/TotalComments";
import TotalViews from "../TotalViews/TotalViews";
import Reply from "../Reply/Reply";
import ToggleLike from "../likeButton/ToggleLike";
import {ToggleArea} from "../../style/StyledModal";
import {ReactComponent as ViewIcon} from "../../assests/images/view.svg";

import {ModalFrame, Blur} from "../../style/StyledModal";

export default function ModalView({billsInformation, likeState, clickHandler}) {
  return (
    <>
      {billsInformation && (
        <ModalPortal>
          <Blur onClick={clickHandler}></Blur>
          <ModalFrame>
            <BillsContents billsInformation={billsInformation} />
            <ToggleArea>
              <p>
                댓글 <TotalComments billId={billsInformation.BILL_ID} />
                <span className="arrow" />
              </p>
              <span className="view-and-like">
                <ViewIcon width={23} height={20}>
                  <label title="조회수" />
                </ViewIcon>
                <TotalViews billId={billsInformation.BILL_ID} inModal={true} />
                <ToggleLike billId={billsInformation.BILL_ID} userLike={likeState} />
              </span>
            </ToggleArea>
            <Reply billId={billsInformation.BILL_ID} billAge={billsInformation.AGE} />
          </ModalFrame>
        </ModalPortal>
      )}
    </>
  );
}
