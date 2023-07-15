import React from "react";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { StyledModalBackDrop, StyledModalBox } from "./StyledModal";
import {
  StyledClose,
  StyledModalText,
  StyledModalButtonBox,
} from "./StyledModal";
import { StyledButtonBasic } from "../StyledComponents/StyledButtonBasic";
import CloseIcon from "../../images/close.svg";

const Modal = ({ toggleModal, textModal, hendelLogOut }) => {
  const portalModal = document.querySelector("#modalRoot");

  const modalEscape = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", modalEscape);

    return () => {
      window.removeEventListener("keydown", modalEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return createPortal(
    <StyledModalBackDrop onClick={clickBackdrop}>
      <StyledModalBox>
        <StyledClose src={CloseIcon} onClick={toggleModal} />
        <StyledModalText>{textModal}</StyledModalText>
        <StyledModalButtonBox>
          <StyledButtonBasic onClick={hendelLogOut}>Да</StyledButtonBasic>
          <StyledButtonBasic onClick={toggleModal}>Нет</StyledButtonBasic>
        </StyledModalButtonBox>
      </StyledModalBox>
    </StyledModalBackDrop>,
    portalModal
  );
};

export default Modal;
