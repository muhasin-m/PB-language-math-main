const rewire = require("rewire");
const fs = require("fs");
const content = fs
  .readFileSync("./solution.js")
  .toString("utf-8")
  .replace(/ /g, "");
const solution = rewire("../solution");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. Minimum and maximum", () => {
  test("a. the lowest number of [-1,4] is determined and printed in the terminal", () => {
    const solution = require("../solution");
    expect(content).toEqual(expect.stringContaining("Math.min"));
    expect(consoleSpy).toHaveBeenCalledWith(Math.min(-1, 0, 1, 2, 3, 4));
  });

  test("b. the highest number of [-1,4] is determined and printed in the terminal", () => {
    const solution = require("../solution");
    expect(content).toEqual(expect.stringContaining("Math.max"));
    expect(consoleSpy).toHaveBeenCalledWith(Math.max(-1, 0, 1, 2, 3, 4));
  });
});

describe("2. Rounding", () => {
  test("3321.32321 is rounded **up** to the nearest integer", () => {
    const solution = require("../solution");
    expect(content).toEqual(expect.stringContaining("Math.ceil"));
    expect(consoleSpy).toHaveBeenCalledWith(Math.ceil(3321.32321));
  });
  
  test("326.76 is rounded **up** to the nearest integer", () => {
    const solution = require("../solution");
    expect(content).toEqual(expect.stringContaining("Math.ceil"));
    expect(consoleSpy).toHaveBeenCalledWith(Math.ceil(326.76));
  });
  
  test("76788.7 is rounded **up** to the nearest integer", () => {
    const solution = require("../solution");
    expect(content).toEqual(expect.stringContaining("Math.ceil"));
    expect(consoleSpy).toHaveBeenCalledWith(Math.ceil(76788.7));
  });
  
  test("-9.78 is rounded **up** to the nearest integer", () => {
    const solution = require("../solution");
    expect(content).toEqual(expect.stringContaining("Math.ceil"));
    expect(consoleSpy).toHaveBeenCalledWith(Math.ceil(-9.78));
  });
  
  test("43.342 is rounded **up** to the nearest integer", () => {
    const solution = require("../solution");
    expect(content).toEqual(expect.stringContaining("Math.ceil"));
    expect(consoleSpy).toHaveBeenCalledWith(Math.ceil(43.342));
  });

  test("3321.32321 is rounded **down** to the nearest integer", () => {
    const solution = require("../solution");
    expect(content).toEqual(expect.stringContaining("Math.floor"));
    expect(consoleSpy).toHaveBeenCalledWith(Math.floor(3321.32321));
  });
  
  test("326.76 is rounded **down** to the nearest integer", () => {
    const solution = require("../solution");
    expect(content).toEqual(expect.stringContaining("Math.floor"));
    expect(consoleSpy).toHaveBeenCalledWith(Math.floor(326.76));
  });
  
  test("76788.7 is rounded **down** to the nearest integer", () => {
    const solution = require("../solution");
    expect(content).toEqual(expect.stringContaining("Math.floor"));
    expect(consoleSpy).toHaveBeenCalledWith(Math.floor(76788.7));
  });
  
  test("-9.78 is rounded **down** to the nearest integer", () => {
    const solution = require("../solution");
    expect(content).toEqual(expect.stringContaining("Math.floor"));
    expect(consoleSpy).toHaveBeenCalledWith(Math.floor(-9.78));
  });
  
  test("28.329 is rounded **down** to the nearest integer", () => {
    const solution = require("../solution");
    expect(content).toEqual(expect.stringContaining("Math.floor"));
    expect(consoleSpy).toHaveBeenCalledWith(Math.floor(28.329));
  });
});

describe("3. Dice Roll", () => {
  test("random integer between 1 and 6 is printed", () => {
    const solution = require("../solution");
    expect(content).toEqual(
      expect.stringContaining("Math.floor(Math.random()")
    );
    const lastConsoleLog = consoleSpy.mock.calls[12][0];
    expect(lastConsoleLog).toBeGreaterThanOrEqual(1);
    expect(lastConsoleLog).toBeLessThanOrEqual(6);
  });
});
