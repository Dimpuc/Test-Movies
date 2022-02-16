import React, { FC } from "react";
import type { SuccessfulMessageProps } from "./model";
import { Message, Container } from "./styled";

const SuccessfulMessage: FC<SuccessfulMessageProps> = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

export default SuccessfulMessage;
