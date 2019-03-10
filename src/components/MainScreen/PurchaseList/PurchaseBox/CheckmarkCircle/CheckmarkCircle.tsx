import React from "react";
import { Box } from "grommet";
import { Checkmark } from "grommet-icons";

export default function CheckmarkCircle() {
  return (
    <Box
      id="CheckboxCircle"
      style={{ position: "absolute" }}
      width="2em"
      height="2em"
      round="full"
      justify="center"
      align="center"
      margin={{ top: "small" }}
      border={{ side: "all", color: "#CECECE", size: "small" }}
      background={{ color: "white" }}
    >
      <Checkmark color="#00C781" size="1em" />
    </Box>
  );
}
