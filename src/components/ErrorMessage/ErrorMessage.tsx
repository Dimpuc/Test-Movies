import React, { FC } from "react";
import type { ErrorMessageProps } from "./model";
import { Message, Container } from "./styled";

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  console.log(message, "message");
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

export default ErrorMessage;
