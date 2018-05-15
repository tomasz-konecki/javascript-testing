function greet(whattosay) {
  return function(name) {
    console.log(whattosay + " " + name);
  };
}

var sayHi = greet("Hi");
sayHi("Tony");

greet("Hello")("Tom");

// ---------------------------------------

buildFunctions = () => {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(() => {
      console.log(i);
    });
  }

  //   i = 5;
  console.log("i=" + i);

  return arr;
};

// buildFunctions2 = () => {
//   var arr = [];

//   for (var i = 0; i < 3; i++) {
//     let j = i;
//     arr.push(() => {
//       console.log(j);
//     });
//   }
//   return arr;
// };

// buildFunctions2 = () => {
//   var arr = [];

//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       (function(j) {
//         return function() {
//           console.log(j);
//         };
//       })(i)
//     );
//   }
//   return arr;
// };

buildFunctions2 = () => {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push((j => () => console.log(j))(i));
  }
  return arr;
};

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

// ---------------------------------------
// Function factories (closures)
// ---------------------------------------

function makeGreeting(language) {
  //   'language' is trapped or collected in the closure
  return function(firstname, lastname) {
    if (language === "en") {
      console.log("Hello " + firstname + " " + lastname);
    }
    if (language === "es") {
      console.log("Hola " + firstname + " " + lastname);
    }
  };
}

makeGreeting("en")("John", "Cleese");

var greetEnglish = makeGreeting("en"); //First execution context
var greetSpanish = makeGreeting("es"); //Second execution context (different)

/*
    Note: greetEnglish is a function object whose closure points to language being English;
    greetSpanish is a function object whose closure points to a different
    execution context for the same f-n where language is Spanish

    

*/

greetEnglish("Terry", "Jones");
greetSpanish("Eric", "Idle");
