// let myName = "";
let vDOM;
let elems;
let data = { myName: "" };
let prevVDOM;
let isFocus;

function createVDOM() {
  return [
    [
      "input",
      data.myName,
      function handle(e) {
        updateData("myName", e.target.value); //"myName" > myName
      },
    ],
    ["div", `Hello, ${data.myName}!`],
    ["div", `Great job, Jonathan!`],
    ["div", `Great job, Alexa!`],
    ["div", `Great job, Emilia!`],
  ];
}

function updateDOM() {
  if (vDOM) {
    document.activeElement == document.querySelector("input")
      ? (isFocus = true)
      : (isFocus = false); // keep this code
  }
  vDOM = createVDOM();
  elems = vDOM.map(convert);
  document.body.replaceChildren(...elems);
  if (isFocus) elems[0].focus(); //keep this code
}

function convert(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}

function updateData(label, value) {
  data[label] = value; //data[label] > data.label
  updateDOM();
}

updateDOM();

function findDiff(prevVDOM, currentVDOM) {
  for (let i = 0; i < currentVDOM.length; i++) {
    if (JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])) {
      // change the actual DOM element related to that vDOM element!
      elems[i].textContent = currentVDOM[i][1];
      elems[i].value = currentVDOM[i][1];
    }
  }
}

//setInterval(updateDOM, 15);
