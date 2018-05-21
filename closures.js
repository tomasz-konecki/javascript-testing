// function foo() {
//   var bar = "bar";

//   function baz() {
//     console.log(bar);
//   }

//   bam(baz);
// }

// function bam(baz) {
//   baz();
// }

// foo();

// ---------------------------------------

// function foo() {
//   var bar = "bar";

//   return function() {
//     console.log(bar);
//   };
// }

// function bam() {
//   foo()();
// }

// bam();

// ---------------------------------------

// function foo() {
//   var bar = "bar";

//   setTimeout(function() {
//     console.log(bar);
//   }, 1000);
// }

// foo();

// ---------------------------------------

// function foo() {
//   var bar = "bar";

//   $("#btn").click(function(e) {
//     console.log(bar);
//   });
// }

// foo();

// ---------------------------------------

// function foo() {
//   var bar = 0;

//   setTimeout(function() {
//     console.log(++bar);
//   }, 1000);

//   setTimeout(function() {
//     console.log(++bar);
//   }, 2000);
// }

// foo();

// ---------------------------------------

// function foo() {
//   var bar = 0;

//   setTimeout(function() {
//     var baz = 1;
//     console.log(bar++);

//     setTimeout(function() {
//       console.log(bar + baz);
//     }, 200);
//   }, 100);
// }

// foo();

// ---------------------------------------

for (let i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log("i: " + i);
  }, i * 1000);
}

// doesn't work properly with 'var';
// works well with 'let';

// ---------------------------------------

// Another solution is using IIFE:

// for (var i = 1; i <= 5; i++) {
//   (function(i) {
//     setTimeout(function() {
//       console.log("i: " + i);
//     }, i * 1000);
//   })(i);
// }

// (above) We have a whole different scope created for each iteration.
// So each one of those functions is closing over an iteration scope
// rather than just over the global scope.
// This is the canonical solution - you put an IIFE inside of a loop.
// What was realy missing was that we wanted a scope for each iteration.
