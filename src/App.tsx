import React, { Component } from "react";
import axios from "axios";
import { Grommet } from "grommet";

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

  componentDidMount(): void {
    this.fetchPurchases();
  }

  fetchPurchases = async (): Promise<any> => {
    try {
      const { data } = await axios.get(API_URL);
      console.log(data);
      this.setState({ data, loading: false });
    } catch (err) {
      this.setState({ error: err });
    }
  };

  render(): JSX.Element {
    const { loading, error, data } = this.state;
    return (
      <Grommet plain>
        {loading ? (
          <LoadingScreen />
        ) : data ? (
          <MainScreen data={data} />
        ) : (
          <ErrorScreen error={error} />
        )}
      </Grommet>
    );
  }
}

export default App;
