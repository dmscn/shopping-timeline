import React, { Component } from "react";
import { Box } from "grommet";

export interface Props {
  data?: any;
}

export default class MainScreen extends Component<Props> {
  render() {
    const { data } = this.props;
    return (
      <Box
        align="center"
        height="100vh"
        direction="row"
        background={{ color: "#DDDFFF", opacity: "strong" }}
      >
        <Box
          id="timeline"
          alignSelf="start"
          margin={{ horizontal: "xlarge" }}
          background={{ color: "#cecece" }}
        />
        <Box height="10vh" width="10vw" background={{ color: "blue" }} />
      </Box>
    );
  }
}
