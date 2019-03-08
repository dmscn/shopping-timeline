import React, { Component } from "react";
import { Box, Heading, Text } from "grommet";

interface Props {
  error?: any;
}

export default class ErrorScreen extends Component<Props> {
  render() {
    const { error } = this.props;
    return (
      <Box height="100vh" justify="center" align="center">
        <Heading>Ops.. Occorreu um erro :(</Heading>
        <Text>{error}</Text>
      </Box>
    );
  }
}
