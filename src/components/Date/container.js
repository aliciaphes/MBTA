import React, { useState } from "react";
import { DateUI } from "./ui";

function DateContainer() {
  const [currentDate] = useState(new Date());

  return <DateUI currentDate={currentDate} />;
}

export const DateBlock = DateContainer;
