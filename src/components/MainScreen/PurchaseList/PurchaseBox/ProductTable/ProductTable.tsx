import React from "react";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "grommet";
import ProductList from "./ProductList";

export interface Props {
  products: Array<any>;
}

export default function ProductTable(props: Props): JSX.Element {
  const { products } = props;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>
            <strong>Nome</strong>
          </TableCell>
          <TableCell>
            <strong>Preço</strong>
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <ProductList products={products} />
      </TableBody>
    </Table>
  );
}
