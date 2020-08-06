import { shallow } from "enzyme";
import React from "react";
import Tile from "../Tile";

describe("Tile Unit Test", () => {
  describe("when rendered", () => {
    it("should add div with id 'board'", () => {
      const wrapper = shallow(<Tile />);
      expect(wrapper.find("button.tile").length).toBe(1);
    });
  });
});
