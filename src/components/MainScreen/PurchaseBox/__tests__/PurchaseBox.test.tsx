import React from "react";
import { shallow } from "enzyme";
import PurchaseBox from "../PurchaseBox";

describe("<PurchaseBox />", () => {
  it("renders", () => {
    const wrapper = shallow(<PurchaseBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
