import React from "react";
import { shallow } from "enzyme";

import ProductList from "../ProductList";

describe("<ProductList />", () => {
  it("renders", () => {
    const wrapper = shallow(<ProductList products={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
