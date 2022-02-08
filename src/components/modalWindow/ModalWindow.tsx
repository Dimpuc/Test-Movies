import React, { FC, useEffect } from "react";
import { CreateFilm } from "../CreateFilm";
import { SModalWindow, SModalWindowWrapper } from "./styled";

interface ModalProps {
  modalActive: boolean;
  handleShowModal(): void;
}

export const ModalWindow: FC<ModalProps> = ({
  modalActive,
  handleShowModal,
}) => {
  const handelClick = (e: any) => {
    e.preventDefault();
    // reset();
    handleShowModal();
  };

  useEffect(() => {
    const body = document.body;
    body.style.overflow = modalActive ? "hidden" : "auto";
  }, [modalActive]);
  return (
    <SModalWindowWrapper
      onClick={handelClick}
      opacity={modalActive ? 1 : 0}
      pointer={modalActive ? "all" : "none"}
    >
      <SModalWindow
        transform={modalActive ? 1 : 0.5}
        onClick={(e) => e.stopPropagation()}
      >
        <CreateFilm handleShowModal={handleShowModal} />
      </SModalWindow>
    </SModalWindowWrapper>
  );
};
