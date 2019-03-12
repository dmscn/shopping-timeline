import React from "react";
import { TableRow, TableCell } from "grommet";

export interface Props {
  products: Array<any>;
}

export default function ProductList(props: Props): any {
  const result: Array<JSX.Element> = props.products.map((product: any) => {
    const { value: productName } = product.custom_data.find(
      (item: any) => item.key === "product_name"
    );
    const { value: productPrice } = product.custom_data.find(
      (item: any) => item.key === "product_price"
    );

    return (
      <TableRow key={product.timestamp}>
        <TableCell scope="row">{productName}</TableCell>
        <TableCell>{productPrice}</TableCell>
      </TableRow>
    );
  });
  return result;
}
