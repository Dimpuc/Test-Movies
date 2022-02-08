import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../Button";
import { uploadMovie } from "../../redux/slices/moviesSlice";
import { Container, Field, ButtonWrapper } from "./styled";

export const UploadMovie = () => {
  const [selectedFile, setSelectedFile] = useState<string>("");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const submitForm = () => {
    const formData = new FormData();
    formData.append("movies", selectedFile, setSelectedFile.name);
    dispatch(uploadMovie({ formData, token }));
  };

  // @ts-ignore:next-line
  const setFile = ({ target: { files } }) => {
    const file = files[0];
    setSelectedFile(file);
  };

  return (
    <Container>
      <div>
        <p>Upload movies</p>
        <form>
          <Field>
            <input accept=".txt" type="file" onChange={setFile} />
          </Field>
          <ButtonWrapper>
            <Button type={"button"} onClick={submitForm}>
              Submit
            </Button>
          </ButtonWrapper>
        </form>
      </div>
    </Container>
  );
};
