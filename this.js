// "use strict";

// function foo() {
//   "use strict";
//   console.log(this);
// }

// var bar = "bar1";
// var o2 = { bar: "bar2", foo: foo };

// foo();
// o2.foo();

// -------------------------------------------

// "use strict";

// var o1 = {
//   bar: "bar1",
//   foo: function() {
//     console.log(this.bar);
//   }
// };

// var o2 = {
//   bar: "bar2",
//   foo: o1.foo
// };

// var bar = "bar3";
// var foo = o1.foo;

// o1.foo();
// o2.foo();

// foo();

// -------------------------------------------

// function foo() {
//   var bar = "bar1";
//   baz();
// }

// function baz() {
//   console.log(this.bar);
// }

// var bar2 = "bar2";

// foo();

// -------------------------------------------

function foo() {
  console.log(this.bar);
}
var bar = "bar1";
var obj = { bar: "bar2" };

foo();
foo.call(obj);
