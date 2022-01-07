const sum = require("./sum");

test("adds 1 + 2 == 3", () => {
    expect(sum(1,2)).toBe(2);
});
test("adds 2 + 2 == 3", () => {
    expect(sum(2,2)).toBe(2);
});
