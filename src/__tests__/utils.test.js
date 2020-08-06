import { checkWinner } from "../utils";

describe("Utils Unit Test", () => {
  describe("checkWinner", () => {
    describe("when 'X' is present in all the 3 tiles of winning combination", () => {
      it("should return 'X'", () => {
        const result = checkWinner(["X", "X", "X"]);
        expect(result).toBe("X");
      });
    });

    describe("when 'O' is present in all the 3 tiles of winning combination", () => {
      it("should return 'O'", () => {
        const result = checkWinner(["X", "O", "X", undefined, "O", undefined, undefined, "O", undefined]);
        expect(result).toBe("O");
      });
    });

    describe("when 'X' is not present in all the 3 tiles of winning combination", () => {
      it("should return 'undefined'", () => {
        const result = checkWinner(["X", "O", "X"]);
        expect(result).toBe(undefined);
      });
    });
  });
});
