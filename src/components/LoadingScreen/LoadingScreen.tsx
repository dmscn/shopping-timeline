import React, { Component } from "react";
import { Box, Text } from "grommet";

export default class LoadingScreen extends Component {
  render() {
    return (
      <Box justify="center" align="center" height="100vh">
        <Text>Loading...</Text>
      </Box>
    );
  }
}
