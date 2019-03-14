import React from "react";
import { TableRow, TableCell } from "grommet";

export interface Props {
  products: Array<any>;
}

export default function ProductList(props: Props): any {
  const { products } = props;

  return products.map((product: any, index: number) => {
    const { value: productName } = product.custom_data.find(
      (item: any) => item.key === "product_name"
    );
    const { value: productPrice } = product.custom_data.find(
      (item: any) => item.key === "product_price"
    );

    const borderStyle =
      index < products.length - 1
        ? { borderBottom: "1px solid #cecece" }
        : undefined;

    return (
      <TableRow style={borderStyle} key={product.timestamp}>
        <TableCell scope="row">{productName}</TableCell>
        <TableCell>R$ {productPrice.toFixed(2)}</TableCell>
      </TableRow>
    );
  });
}
