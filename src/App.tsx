import React, { Component } from "react";
import axios from "axios";

import MainScreen from "./components/MainScreen";
import LoadingScreen from "./components/LoadingScreen";
import ErrorScreen from "./components/ErrorScreen";

const API_URL = "https://storage.googleapis.com/dito-questions/events.json";

export interface State {
  loading: boolean;
  error?: string;
  data?: any;
}
class App extends Component<any, State> {
  state = {
    loading: true,
    error: undefined,
    data: undefined
  };

  componentDidMount() {
    this.fetchPurchases();
  }

  fetchPurchases = async () => {
    try {
      const { data } = await axios.get(API_URL);
      console.log(data);
      this.setState({ data, loading: false });
    } catch (err) {
      this.setState({ error: err });
    }
  };

  render() {
    const { loading, error, data } = this.state;

    if (loading) return <LoadingScreen />;
    if (data) return <MainScreen data={data} />;
    return <ErrorScreen error={error} />;
  }
}

export default App;
