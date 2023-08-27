const { transformObject } from "./helperFunction";

describe("transformObject function", () => {
  it("should increment numbers by 1", () => {
    const input = { a: 123, b: 42 };
    const expected = { a: 124, b: 43 };
    expect(transformObject(input)).toEqual(expected);
  });

  it('should append " AE" to strings', () => {
    const input = { a: "abc", b: "def" };
    const expected = { a: "abc AE", b: "def AE" };
    expect(transformObject(input)).toEqual(expected);
  });

  it("should increment numbers in arrays by 1", () => {
    const input = { a: [1, 2, 3], b: [4, 5] };
    const expected = { a: [2, 3, 4], b: [5, 6] };
    expect(transformObject(input)).toEqual(expected);
  });

  it("should transform nested objects", () => {
    const input = {
      a: 123,
      b: "abc",
      c: [1, 2, 3],
      d: {
        e: [4, 5, 6],
        f: "xyz",
      },
    };
    const expected = {
      a: 124,
      b: "abc AE",
      c: [2, 3, 4],
      d: {
        e: [5, 6, 7],
        f: "xyz AE",
      },
    };
    expect(transformObject(input)).toEqual(expected);
  });

  it("should return non-object values as is", () => {
    const input = "test";
    expect(transformObject(input)).toEqual("test");
  });

  it("should handle null input", () => {
    const input = null;
    expect(transformObject(input)).toEqual(null);
  });
});
