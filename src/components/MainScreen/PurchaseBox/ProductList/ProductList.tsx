import React from "react";
import { DataTable, Box, Text } from "grommet";

export interface Props {
  products: [];
}

export default function ProductList(props: Props): JSX.Element {
  const { products } = props;

  return (
    <DataTable
      columns={[
        {
          property: "product_name",
          header: <Text>Produto</Text>,
          primary: true
        },
        {
          property: "revenue",
          header: <Text>Preço</Text>
        }
      ]}
      data={products}
    />
  );
}
