import React from "react";
import { shallow } from "enzyme";

import ErrorScreen from "../ErrorScreen";

describe("<ErrorScreen />", () => {
  it("renders", () => {
    const wrapper = shallow(<ErrorScreen error={"error"} />);
    expect(wrapper).toMatchSnapshot();
  });
});
