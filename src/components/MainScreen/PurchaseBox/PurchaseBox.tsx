import React, { Component } from "react";
import { Box } from "grommet";
import { Checkmark } from "grommet-icons";

export interface Props {
  products: any;
}

export default class PurchaseBox extends Component<Props> {
  render() {
    const { products } = this.props;
    return (
      <Box
        width="30vw"
        height="30vh"
        direction="row"
        margin={{ top: "large", left: "-1em" }}
      >
        {/* CheckBox Circle */}
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

        {/* Arrow */}
        <Box
          id="arrow"
          style={{ transform: "rotate(45deg)", zIndex: 2 }}
          width="1em"
          height="1em"
          margin={{ left: "large", top: "medium", right: "-.5em" }}
          background={{ color: "white" }}
        />

        {/* ContentBox */}
        <Box
          id="ContentBox"
          fill="horizontal"
          round="small"
          elevation="large"
          background={{ color: "white" }}
        />
      </Box>
    );
  }
}
