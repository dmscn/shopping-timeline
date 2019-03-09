import React, { Component } from "react";
import { Box } from "grommet";
import PurchaseBox from "./PurchaseBox";

export interface Props {
  data?: any;
}

export default class MainScreen extends Component<Props> {
  formatData = (data: any): any => {
    const purchases = data.filter((item: any) => item.event === "comprou");
    const products = data.filter(
      (item: any) => item.event === "comprou-produto"
    );
    let result;
    products.reduce(result, (product: any) => {
      purchases.includes();
    });

    console.log("result after reduce", result);
    return result;
  };

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
          <PurchaseBox data={[]} />
          <PurchaseBox data={[]} />
          <PurchaseBox data={[]} />
          <PurchaseBox data={[]} />
        </Box>
      </Box>
    );
  }
}
