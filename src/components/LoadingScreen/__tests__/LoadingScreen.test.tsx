import React from "react";
import { shallow } from "enzyme";

import LoadingScreen from "../LoadingScreen";

describe("<LoadingScreen />", () => {
  it("renders", () => {
    const wrapper = shallow(<LoadingScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
