import { shallow } from "enzyme";
import React from "react";
import Board from "../Board";

describe("Board Unit Test", () => {
  describe("when rendered", () => {
    it("should add div with id 'board'", () => {
      const wrapper = shallow(<Board />);
      expect(wrapper.find("div#board")).toBeDefined();
    });
  });
});
