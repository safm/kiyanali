import { shallow } from "enzyme";
import React from "react";
import Game from "../Game";

describe("Game Unit Test", () => {
  describe("when rendered", () => {
    it("should show 'Hello World'", () => {
      const wrapper = shallow(<Game />);
      expect(wrapper.find("div").text()).toBe("Hello World");
    });
  });
});
