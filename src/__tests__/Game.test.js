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

    it("should render 9 tiles", () => {
      const wrapper = mount(<Game />);
      expect(wrapper.find("button.tile").length).toBe(9);
    });
  });

  describe("when clicked on tile", () => {
    it("should set button text to 'X'", () => {
      const wrapper = mount(<Game />);
      const firstBtn = wrapper.find("button.tile").at(0);
      firstBtn.simulate("click");
      expect(firstBtn.text()).toBe("X");
    });

    it("should alternate between 'X' & 'O'", () => {
      const wrapper = mount(<Game />);
      const firstBtn = wrapper.find("button.tile").at(0);
      const secondBtn = wrapper.find("button.tile").at(1);
      const thirdBtn = wrapper.find("button.tile").at(2);
      firstBtn.simulate("click");
      secondBtn.simulate("click");
      thirdBtn.simulate("click");
      expect(firstBtn.text()).toBe("X");
      expect(secondBtn.text()).toBe("O");
      expect(thirdBtn.text()).toBe("X");
    });

    it("should not update the tile when clicked the second time", () => {
      const wrapper = mount(<Game />);
      const firstBtn = wrapper.find("button.tile").at(0);
      firstBtn.simulate("click");
      expect(firstBtn.text()).toBe("X");
      firstBtn.simulate("click");
      expect(firstBtn.text()).toBe("X");
    });
  });
});
