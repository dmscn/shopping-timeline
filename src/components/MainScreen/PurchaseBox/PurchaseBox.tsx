import React, { Component } from "react";
import { Box, Text } from "grommet";
import { Checkmark, Plan, Clock, Location, Money } from "grommet-icons";
import moment from "moment";

moment.locale("pt-BR");

export interface Props {
  data: any;
}

export default function PurchaseBox(props: Props): JSX.Element {
  const { data } = props;
  const { products } = data;
  return (
    <Box
      width="30vw"
      height="30vh"
      direction="row"
      margin={{ top: "large", left: "-1em" }}
    >
      {/* CheckBox Circle */}
      <Box
        id="CheckboxCircle"
        style={{ position: "absolute" }}
        width="2em"
        height="2em"
        round="full"
        justify="center"
        align="center"
        margin={{ top: "small" }}
        border={{ side: "all", color: "#CECECE", size: "small" }}
        background={{ color: "white" }}
      >
        <Checkmark color="#00C781" size="1em" />
      </Box>

      {/* Arrow */}
      <Box
        id="arrow"
        style={{ transform: "rotate(45deg)", zIndex: 2 }}
        width="1em"
        height="1em"
        margin={{ left: "large", top: "medium", right: "-.5em" }}
        background={{ color: "white" }}
      />

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
          align="center"
          background={{ color: "white" }}
        >
          <Plan color="#cecece" size="1.5em" />
          <Text>{moment(data.timestamp).format("DD/MM/YYYY")}</Text>

          <Clock color="#cecece" size="1.5em" />
          <Text>{moment(data.timestamp).format("LT")}</Text>

          <Location color="#cecece" size="1.5em" />
          <Text>{data}</Text>

          <Money color="#cecece" size="1.5em" />
          <Text>{moment(data.timestamp).format("LT")}</Text>
        </Box>
      </Box>
    </Box>
  );
}
