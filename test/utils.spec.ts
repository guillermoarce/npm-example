import test from "ava";

import * as utils from "./../src";

test("should returns the correct type", (t) => {
  t.is(utils.getType({}), "Object");
  t.is(utils.getType(new Object()), "Object");
  t.is(utils.getType(Object.create(null)), "Object");
  t.is(utils.getType([]), "Array");
  t.is(utils.getType(new Array()), "Array");
  t.is(utils.getType(new Date()), "Date");
  t.is(utils.getType(String()), "String");
  t.is(utils.getType(""), "String");
  t.is(utils.getType("123"), "String");
  t.is(utils.getType(123), "Number");
  t.is(utils.getType(123.4), "Number");
  t.is(utils.getType(true), "Boolean");
  t.is(utils.getType(false), "Boolean");
  t.is(utils.getType(BigInt(1)), "BigInt");
  t.is(
    utils.getType(() => {}),
    "Function"
  );
  t.is(utils.getType(BigInt), "Function");
  t.is(utils.getType(undefined), "Undefined");
  t.is(utils.getType(), "Undefined");
  t.is(utils.getType(null), "Null");
});

test("should verify equality", (t) => {
  t.true(utils.isEqual(1, 1));
  t.true(utils.isEqual(1.23, 1.23));
  t.true(utils.isEqual("1", "1"));
  t.true(utils.isEqual(true, true));
  t.true(utils.isEqual(undefined, undefined));
  t.true(utils.isEqual(null, null));
  t.true(utils.isEqual({}, {}));
  t.true(utils.isEqual({ foo: "bar" }, { foo: "bar" }));
  t.true(utils.isEqual([], []));
  t.true(utils.isEqual(["foo"], ["foo"]));
  t.true(
    utils.isEqual(
      ["foo", { foo: "bar" }, 1, "a"],
      ["foo", { foo: "bar" }, 1, "a"]
    )
  );
  t.false(
    utils.isEqual(
      ["foo", { foo: "bar" }, 1, "a"],
      ["foo", { foo: "baz" }, 1, "a"]
    )
  );
  t.false(utils.isEqual(true, 1));
  t.false(utils.isEqual({ foo: "bar" }, {}));
});
