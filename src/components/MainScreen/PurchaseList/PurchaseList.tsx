import React, { Component } from "react";

import PurchaseBox from "./PurchaseBox";

export interface Props {
  data: Array<any>;
}

export default class PurchaseList extends Component<Props> {
  formatData = (data: any): Array<any> => {
    const { events } = data;

    const purchases = events
      .filter((item: any) => item.event === "comprou")
      .map((purchase: any) => {
        const transactionId: string = purchase.custom_data.find(
          (item: any) => item.key === "transaction_id"
        ).value;
        return {
          ...purchase,
          transaction_id: transactionId
        };
      });

    const products = events.filter(
      (item: any) => item.event === "comprou-produto"
    );
    console.log("Products ", products);

    let result = products.reduce((acc: Array<any>, product: any) => {
      const transactionId: string = product.custom_data.find(
        (item: any) => item.key === "transaction_id"
      ).value;
      console.log("Transaction id product =>", transactionId);
      const purchaseIndex = acc.findIndex(
        (purchase: any) => purchase.transaction_id === transactionId
      );
      console.log("Purchase Index => ", purchaseIndex);
    }, purchases);

    // console.log("result after reduce", result);
    // return result;
    return [];
  };

  render(): JSX.Element {
    const { data } = this.props;
    const formatedData = this.formatData(data);
    // return this.formatData(data).map((purchase: any) => (<PurchaseBox data={[]}/>));
    return <PurchaseBox data={[]} />;
  }
}
