import { shallow } from "enzyme";
import React from "react";
import Header from "../Header";

describe("Header Unit Test", () => {
  describe("when rendered", () => {
    it("should add div with id 'header'", () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find("#header").length).toBe(1);
    });
  });

  describe("when game has ended", () => {
    describe("and play X is a winner", () => {
      it("should show correct message", () => {
        const wrapper = shallow(<Header gameInPlay={false} winner="X" />);
        expect(wrapper.find("#header").text()).toBe("Game Over! Player X is the winner");
      });
    });

    describe("and nobody is the winner", () => {
      it("should show correct message", () => {
        const wrapper = shallow(<Header gameInPlay={false} winner={undefined} />);
        expect(wrapper.find("#header").text()).toBe("Game Over! It's a tie");
      });
    });
  });

  describe("when game is still in play", () => {
    describe("and it is player X's turn", () => {
      it("should show correct message", () => {
        const wrapper = shallow(<Header gameInPlay={true} userX={true} />);
        expect(wrapper.find("#header").text()).toBe("Next player: X");
      });
    });

    describe("and it is player O's turn", () => {
      it("should show correct message", () => {
        const wrapper = shallow(<Header gameInPlay={true} userX={false} />);
        expect(wrapper.find("#header").text()).toBe("Next player: O");
      });
    });
  });
});
