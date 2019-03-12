import React from "react";
import { shallow } from "enzyme";
import ProductTable from "../ProductTable";

describe("<ProductList />", () => {
  it("renders", () => {
    const wrapper = shallow(<ProductTable products={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
