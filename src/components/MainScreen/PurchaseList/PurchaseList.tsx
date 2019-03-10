import React, { Component } from "react";

export interface Props {
  data: any;
}

export default class PurchaseList extends Component<Props> {
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
    return <div />;
  }
}
