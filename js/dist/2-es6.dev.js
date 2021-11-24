"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

// clojure "bug"
function makeArray() {
  arr = (_readOnlyError("arr"), []);

  for (var i = 0; i < 5; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

var arr = makeArray();
arr[0]();