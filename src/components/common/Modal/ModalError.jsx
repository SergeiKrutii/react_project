import React from "react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { StyledModalBackDrop, StyledModalBox } from "./StyledModal";
import { StyledClose, StyledModalText } from "./StyledModal";
import CloseIcon from "../../images/close.svg";

const ModalError = ({ textModal }) => {
  const portalModal = document.querySelector("#modalRoot");
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prevState) => !prevState);

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
      </StyledModalBox>
    </StyledModalBackDrop>,
    portalModal
  );
};

export default ModalError;
