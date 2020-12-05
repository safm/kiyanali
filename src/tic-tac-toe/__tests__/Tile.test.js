import { shallow } from "enzyme";
import React from "react";
import Tile from "../Tile";

describe("Tile Unit Test", () => {
  describe("when rendered", () => {
    it("should add div with id 'board'", () => {
      const wrapper = shallow(<Tile />);
      expect(wrapper.find("button.tile").length).toBe(1);
    });

    it("should display passed value as button text", () => {
      const wrapper = shallow(<Tile value="x" />);
      expect(wrapper.find("button.tile").text()).toBe("x");
    });
  });

  describe("when clicked", () => {
    it("should call the passed called back with passed position prop", () => {
      const clickSpy = jest.fn();
      const wrapper = shallow(<Tile value="x" onClick={clickSpy} position="2" />);
      wrapper.find("button.tile").simulate("click");
      expect(clickSpy).toHaveBeenCalledWith("2");
    });
  });
});
