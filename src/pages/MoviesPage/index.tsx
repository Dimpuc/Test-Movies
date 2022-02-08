import React, { useState } from "react";
import Button from "../../components/Button";
import { ModalWindow } from "../../components/modalWindow/ModalWindow";
import { UploadMovie } from "../../components/UploadMovie";
import { CreateUploadWrapper, SBtnWrapper, SMoviesPage } from "./styled";

export const MoviesPage = () => {
  const [modalActive, setModalActive] = useState(false);

  const handleShowModal = () => {
    setModalActive(!modalActive);
  };
  return (
    <SMoviesPage>
      <CreateUploadWrapper>
        <SBtnWrapper>
          <Button onClick={() => handleShowModal()}>Add Movies</Button>
        </SBtnWrapper>
        <UploadMovie />
      </CreateUploadWrapper>
      <ModalWindow
        modalActive={modalActive}
        handleShowModal={handleShowModal}
      />
    </SMoviesPage>
  );
};
