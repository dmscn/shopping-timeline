import React, { Component } from "react";

import PurchaseBox from "./PurchaseBox";

export interface Props {
  data: any;
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

    return result;
  };

  render(): Array<JSX.Element> {
    const { data } = this.props;
    const formatedData: Array<any> = this.formatData(data);
    return formatedData.map((purchase: any) => (
      <PurchaseBox purchase={purchase} key={purchase.transaction_id} />
    ));
  }
}
