const sum = require("./sum");

test("adds two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
});

test("adds negative numbers", () => {
    expect(sum(-2, -3)).toBe(-5);
});

test("throws error if arguments are not numbers", () => {
    expect(() => sum("2", 3)).toThrow();
});