import React, { Component } from "react";
import { Box, Text } from "grommet";
import { Checkmark, Plan, Clock, Location, Money } from "grommet-icons";
import moment from "moment";
import "moment/min/locales";

import ProductTable from "./ProductTable";
import CheckmarkCircle from "./CheckmarkCircle";
import BoxArrow from "./BoxArrow/BoxArrow";

moment.locale("pt-br");

export interface Props {
  purchase: any;
}

export default function PurchaseBox(props: Props): JSX.Element {
  const { purchase } = props;
  const { products } = purchase;
  console.log("Products", products);
  return (
    <Box
      style={{ minHeight: "30vh", minWidth: "30vw" }}
      direction="row"
      margin={{ top: "large", left: "-1em" }}
    >
      <CheckmarkCircle />
      <BoxArrow />

      {/* ContentBox */}
      <Box
        id="ContentBox"
        fill="horizontal"
        round="small"
        elevation="large"
        overflow="hidden"
        background={{ color: "#f6f6f6" }}
      >
        {/* ContentHeader */}
        <Box
          style={{ zIndex: 3 }}
          id="Header"
          fill="horizontal"
          height="4em"
          direction="row"
          pad="medium"
          justify="between"
          align="center"
          background={{ color: "white" }}
        >
          <Box direction="row">
            <Plan color="#cecece" size="1.5em" />
            <Text>{moment(purchase.timestamp).format("DD/MM/YYYY")}</Text>
          </Box>

          <Box direction="row">
            <Clock color="#cecece" size="1.5em" />
            <Text>{moment(purchase.timestamp).format("LT")}</Text>
          </Box>

          <Box direction="row">
            <Location color="#cecece" size="1.5em" />
            <Text>{purchase.store_name}</Text>
          </Box>
          <Box direction="row">
            <Money color="#cecece" size="1.5em" />
            <Text>{purchase.total_value}</Text>
          </Box>
        </Box>

        {/* Products */}
        <ProductTable products={products} />
      </Box>
    </Box>
  );
}
