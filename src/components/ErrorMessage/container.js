import React from "react";
import { ErrorMessageUI } from "./ui";

function ErrorMessageContainer(props) {
  const { errorMessage } = props;

  return <ErrorMessageUI errorMessage={errorMessage} />;
}

export const ErrorMessage = ErrorMessageContainer;
