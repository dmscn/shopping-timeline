import React, { Component } from "react";
import { Box } from "grommet";
import PurchaseBox from "./PurchaseBox";

export interface Props {
  data?: any;
}

export default class MainScreen extends Component<Props> {
  render() {
    const { data } = this.props;
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
          <PurchaseBox products={[]} />
          <PurchaseBox products={[]} />
          <PurchaseBox products={[]} />
          <PurchaseBox products={[]} />
        </Box>
      </Box>
    );
  }
}
