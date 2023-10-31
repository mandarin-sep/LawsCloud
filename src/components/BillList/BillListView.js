import React from "react";
import {StyledBillTable, StyledBillThead, StyledBillTbody} from "../../style/StyledBillsList";
import ExcelFilterList from "./ExcelFilterList";
import ModalContainer from "../Modal/ModalContainer";
import TotalViews from "../TotalViews/TotalViews";
import LikeNum from "./LikeNum";

const BillListView = ({
  headerMeta,
  setToggle,
  toggle,
  toggleHandler,
  billList,
  clickHandler,
  modalOpen,
  billsInformation,
}) => {
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
                <div className="item" onClick={() => clickHandler(data)}>
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

export default BillListView;
