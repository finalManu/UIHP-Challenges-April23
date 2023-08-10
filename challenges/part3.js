let myName = "";
let isFocus = false;
let vDOM;

let jsInput; //= document.querySelector("input");
let jsDiv; //= document.querySelector("div");

// function dataToView() {
//   jsInput.value = myName;
//   jsDiv.textContent = myName;
// }

function handleInput() {
  myName = jsInput.value;
}


// function component() {
//   document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);

//   //your code here
//   jsInput = document.createElement("input");
//   jsDiv = document.createElement("div");

//   jsInput.oninput = handleInput;
//   jsInput.value = myName;
//   jsDiv.textContent = myName;

//   document.body.replaceChildren(jsInput, jsDiv);

//   if (isFocus) jsInput.focus();
// }

// ['div', ['div', ['div', `Hello, ${myName}!`]]]

function createVDOM() {

  function handle() {
    myName = jsInput.value;
  }
return ([['input', myName, handle],
         ['div', `Hello, ${myName}!`]])
}


function updateDOM() {

  document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);

  vDOM = createVDOM();
  jsInput = convert(vDOM[0]);
  jsDiv = convert(vDOM[1]);

  document.body.replaceChildren(jsInput, jsDiv);

  if (isFocus) jsInput.focus();

}

function convert(node) {

  const element = document.createElement(node[0]);

  element.value = node[1];
  element.textContent = node[1];
  element.oninput = node[2];

  return element;

}

setInterval(updateDOM, 15);
