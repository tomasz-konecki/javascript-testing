let script = document.createElement("script");
script.src = "inheritance.js";

document.head.append(script);

let box = document.createElement("div");
box.innerText = "Box 1";
box.setAttribute("style", "width: 150px"); // bad practice
box.setAttribute("class", "box");
box.style.height = "50px";
box.style.background = "teal";
document.body.appendChild(box);
