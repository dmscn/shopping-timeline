import React, { Component } from "react";
import { Box } from "grommet";
import PurchaseList from "./PurchaseList";

export interface Props {
  data?: any;
}

export default function MainScreen(props: Props) {
  return (
    <Box
      style={{ minHeight: "100vh" }}
      align="center"
      direction="row"
      pad={{ vertical: "large" }}
      background={{ color: "#DDDFFF", opacity: "medium" }}
    >
      <Box
        margin={{ horizontal: "xlarge" }}
        pad={{ bottom: "large" }}
        justify="start"
        border={{ side: "left", color: "#cecece", size: "small" }}
      >
        <PurchaseList data={props.data} />
      </Box>
    </Box>
  );
}
