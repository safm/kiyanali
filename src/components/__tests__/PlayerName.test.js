import { shallow } from "enzyme";
import React from "react";
import PlayerName from "../PlayerName";

describe("PlayerName Unit Test", () => {
  describe("when rendered", () => {
    it("should add div with id 'players'", () => {
      const wrapper = shallow(<PlayerName />);
      expect(wrapper.find("#players").length).toBe(1);
    });

    it("should add 2 input boxes to enter player names", () => {
      const wrapper = shallow(<PlayerName />);
      expect(wrapper.find("input[type='text']").length).toBe(2);
    });
  });
});
