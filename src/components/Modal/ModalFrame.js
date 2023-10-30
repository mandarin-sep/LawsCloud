import React from "react";
import ModalPortal from "./ModalPortal";
import {ModalContainer, Blur} from "../../style/StyledModal";
import {useRecoilState} from "recoil";
import {modalState} from "../../recoil/store";

function ModalFrame({children}) {
  const [_, setModalOpen] = useRecoilState(modalState);
  return (
    <ModalPortal>
      <Blur onClick={() => setModalOpen(false)}></Blur>
      <ModalContainer>
        <div>{children}</div>
      </ModalContainer>
    </ModalPortal>
  );
}

export default ModalFrame;
