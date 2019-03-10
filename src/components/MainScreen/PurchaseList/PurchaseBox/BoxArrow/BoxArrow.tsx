import React from "react";
import { Box } from "grommet";

export default function BoxArrow() {
  return (
    <Box
      id="arrow"
      style={{ transform: "rotate(45deg)", zIndex: 2 }}
      width="1em"
      height="1em"
      margin={{ left: "large", top: "medium", right: "-.5em" }}
      background={{ color: "white" }}
    />
  );
}
