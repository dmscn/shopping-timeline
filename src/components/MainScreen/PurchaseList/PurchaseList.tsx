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

    const products = events
      .filter((item: any) => item.event === "comprou-produto")
      .map((product: any) => {
        const transactionId: string = product.custom_data.find(
          (item: any) => item.key === "transaction_id"
        ).value;
        return {
          ...product,
          transaction_id: transactionId
        };
      });

    let result = purchases.reduce((acc: Array<any>, purchase: any) => {
      const purchaseProducts: Array<any> = products.filter(
        (product: any) => product.transaction_id === purchase.transaction_id
      );
      purchase = {
        ...purchase,
        products: purchaseProducts
      };
      return acc.concat(purchase);
    }, []);

    console.log("result after reduce", result);
    return result;
  };

  render(): JSX.Element {
    const { data } = this.props;
    const formatedData = this.formatData(data);
    // return this.formatData(data).map((purchase: any) => (<PurchaseBox data={[]}/>));
    return <PurchaseBox data={[]} />;
  }
}
