import React, { Component } from "react";

export interface Props {
  data?: any;
}

export default class MainScreen extends Component<Props> {
  render() {
    const { data } = this.props;
    return <div>{JSON.stringify(data)}</div>;
  }
}
