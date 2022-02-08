import React, { FC } from "react";
import type { ErrorMessageProps } from "./model";
import { Message, Container } from "./style";

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
  <Container>
    <Message>{message}</Message>
  </Container>
);

export default ErrorMessage;
