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
  const {
    purchase,
    purchase: { products }
  }: any = props;
  console.log(purchase);
  return (
    <Box direction="row" margin={{ top: "large", left: "-1em" }}>
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
            <Plan
              color="#cecece"
              size="1.5em"
              style={{ marginRight: ".3em" }}
            />
            <Text>{moment(purchase.timestamp).format("DD/MM/YYYY")}</Text>
          </Box>

          <Box direction="row">
            <Clock
              color="#cecece"
              size="1.5em"
              style={{ marginRight: ".3em" }}
            />
            <Text>{moment(purchase.timestamp).format("LT")}</Text>
          </Box>

          <Box direction="row">
            <Location
              color="#cecece"
              size="1.5em"
              style={{ marginRight: ".3em" }}
            />
            <Text>
              {
                purchase.custom_data.find(
                  (item: any) => item.key === "store_name"
                ).value
              }
            </Text>
          </Box>

          <Box direction="row" style={{ flexWrap: "nowrap" }}>
            <Money
              color="#cecece"
              size="1.5em"
              style={{ marginRight: ".3em" }}
            />
            <Text>R$ {purchase.revenue.toFixed(2)}</Text>
          </Box>
        </Box>

        {/* Products */}
        <Box pad={{ horizontal: "medium", vertical: "small" }}>
          <ProductTable products={products} />
        </Box>
      </Box>
    </Box>
  );
}
