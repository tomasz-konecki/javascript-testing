// var foo = (function() {
//   var o = { bar: "bar" };

//   return {
//     bar: function() {
//       console.log(o.bar);
//     }
//   };
// })();

// foo.bar();

// var foo = function() {
//   var o = { bar: "bar" };

//   return {
//     bar: function() {
//       console.log(o.bar);
//     }
//   };
// };

// foo().bar();

var foo = (function() {
  var publicAPI = {
    bar: function() {
      publicAPI.baz();
    },
    baz: function() {
      console.log("baz");
    }
  };
  return publicAPI;
})();

foo.bar();
