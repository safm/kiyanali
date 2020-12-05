import { shallow, mount } from "enzyme";
import React from "react";
import Board from "../Board";

describe("Board Unit Test", () => {
  describe("when rendered", () => {
    it("should add div with id 'board'", () => {
      const wrapper = shallow(<Board tiles={[]} />);
      expect(wrapper.find("div#board")).toBeDefined();
    });
  });

  describe("when mounted", () => {
    it("rendered tiles based on props", () => {
      const tiles = ["x", "o"];
      const wrapper = mount(<Board tiles={tiles} />);
      expect(wrapper.find("button.tile").length).toBe(2);
    });
  });
});
