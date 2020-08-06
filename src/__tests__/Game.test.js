import { shallow, mount } from "enzyme";
import React from "react";
import Game from "../Game";

describe("Game Unit Test", () => {
  describe("when rendered", () => {
    it("should show 'Hello World'", () => {
      const wrapper = shallow(<Game />);
      expect(wrapper.find("div#game").length).toBe(1);
    });
  });

  describe("when mounted", () => {
    it("should render Board component", () => {
      const wrapper = mount(<Game />);
      expect(wrapper.find("div#board").length).toBe(1);
    });
  });
});
