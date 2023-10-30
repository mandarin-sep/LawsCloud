import styled from "styled-components";

export const ViewArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const ToggleArea = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  gap: 20px;

  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 20px;

  color: #969696;
  font-size: 16px;

  .arrow {
    display: inline-block;
    width: 10px;
    height: 10px;

    margin-left: 5px;

    transform: rotate(135deg);

    border-top: 1px solid #969696;
    border-left: 1px solid #969696;
  }

  span.view-and-like {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 5px;

    right: 30px;
  }
`;

export const ModalContainer = styled.div`
  box-sizing: border-box;

  width: min(100%, 1200px);
  height: 800px;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 1000;

  overflow: hidden;

  border-radius: 12px;
  background-color: white;
  box-shadow: 1px 3px 20px rgba(0, 0, 0, 0.2);
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Blur = styled.label`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 999;

  background-color: #969696;
  opacity: 0.67;
`;

export const Container = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  box-sizing: border-box;

  width: min(100%, 1200px);

  margin: auto;

  border: none;

  .bill-detail {
    @media screen and (max-width: 722px) {
      height: 500px;
      margin-top: -10px;
    }

    @media screen and (max-width: 550px) {
      height: 450px;
      margin-top: -5px;
    }
  }
`;

export const BillProcResultArea = styled.div`
  display: flex;
  flex: 1;
  background-color: #fff;
  z-index: 10;
`;

export const BillInformationArea = styled.div`
  display: flex;
  background-color: #fff;
  z-index: 10;
  @media screen and (max-width: 722px) {
    flex-direction: column;
  }
`;
export const BillIframe = styled.div`
  height: 400px;
`;

export const BillProc = styled.div`
  z-index: 10;
  width: 40%;

  display: flex;
  align-items: center;

  padding-left: 14px;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #c6c6c6;
  background-color: #fff;
  z-index: 10;

  @media screen and (max-width: 722px) {
    width: 20%;
  }
`;

export const BillNameArea = styled.div`
  display: flex;
`;

export const BillName = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  padding-left: 14px;

  border: solid;
  border-width: 0 0 1px 0;
  border-color: #c6c6c6;
`;

export const Title = styled.div`
  width: 168px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #000000;

  white-space: nowrap;

  z-index: 10;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #c6c6c6;
`;

export const InfoArea = styled.div`
  display: flex;

  flex: 1;
`;

export const BillInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 10px;

  white-space: nowrap;

  padding-left: 14px;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #c6c6c6;
  background-color: #fff;

  z-index: 10;

  @media screen and (max-width: 722px) {
    flex: 1;
    border-width: 0 0px 1px 0;
  }
`;

export const BillCommittee = styled.div`
  display: flex;
  align-items: center;
  width: 40%;

  padding-left: 14px;

  border: solid;
  border-width: 0 0 1px 0;
  border-color: #c6c6c6;

  @media screen and (max-width: 722px) {
    flex: 1;
  }
`;

export const BorderLine = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 0px;
  left: 1px;
  top: 45px;

  border: none;
`;
export const BillDetailArea = styled.div`
  box-sizing: border-box;
  height: 460px;

  @media screen and (max-width: 550px) {
    width: 550px;
    -webkit-transform: scale(0.8);
    -webkit-transform-origin: 10% -40%;
    border-width: 0;
  }
`;

export default ViewArea;
