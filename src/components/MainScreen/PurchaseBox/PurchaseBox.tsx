import React, { Component } from "react";
import { Box } from "grommet";

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
        margin={{ top: "large", left: "-1.5em" }}
        background={{ color: "#0000FF", opacity: "medium" }}
      />
    );
  }
}
