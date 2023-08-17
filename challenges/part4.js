// let myName = "";

// const vDOM = [
//   [
//     "input",
//     myName,
//     function handle() {
//       myName = jsInput.value;
//     },
//   ],
//   ["div", `Hello, ${myName}!`],
//   ["div", `Check it out now`],
//   ["div", `The funk soul brother`],
// ];

// function convert(node) {
//   const element = document.createElement(node[0]);
//   element.textContent = node[1];
//   element.value = node[1];
//   element.oninput = node[2];
//   return element;
// }

// const elems = vDOM.map(convert);
// document.body.append(...elems);

/** Step @todo */
/* uncomment the code below this line, and comment out the code above*/

let isFocus = false;

let myName = "";
let jsInput;
let jsDiv;
let vDOM;

//CAPITAL FIRST LETTER
//standard in UI frameworks that when a function is acting
//as a description of a relationship between underlying data.
//example of one functional component
function Input() {
  return ["input", myName, function handle(e) {
    myName = e.target.value;
  }];
}

function createVDOM() {
  return [
    Input(),
    ["div", `Hello, ${myName}!`],
    ["div", `Como`],
    ["div", `Estas?`],
  ];
}

function updateDOM() {
  document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);
  vDOM = createVDOM();
  elems = vDOM.map(convert);
  jsInput = elems[0];
  document.body.replaceChildren(...elems);
  if (isFocus) jsInput.focus();
}

function convert(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}

setInterval(updateDOM, 15);
