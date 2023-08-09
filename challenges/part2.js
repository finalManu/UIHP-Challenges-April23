let post; //starts off as undefined
let posts = [];

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");

//user needs to manually delete the text in the input field
//jsInput.value = "What's on your mind?";

//now gets cleared when clicked
function handleClick() {
  // Now all view changes must happen through dataToView()
  //jsInput.value = "";
  post = "";
  dataToView();
}
jsInput.onclick = handleClick;

function handleInput() {
  post = jsInput.value;
  // Now all view changes must happen through dataToView()
  // jsDiv.textContent = post;
  dataToView();
}

jsInput.oninput = handleInput;

function dataToView() {
  post == undefined
    ? jsInput.value = "What's on your mind?"
    : jsInput.value = post;
  jsDiv.textContent = post; //layout engine won't render undefined
}

dataToView();
// Alternative, remove dTV calls from handlers and
// call dTV automatically at similar frequency as
// browser refresh rate:
// setInterval(dataToView, 15);

// *******************************************
// Extension Challenge Submit Button

//createElement creates elem in DOM but doesnt include it in the 'list'
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
//Here we are including it in the list of elems in C++, best to add right away or?
document.body.appendChild(submitButton);
submitButton.style.width = "150px";
submitButton.style.height = "50px";
submitButton.style.fontSize = "18px";

submitButton.onclick = function (e) {
  // Prevent the default button click behavior
  e.preventDefault();

  // Your custom logic for handling the submission
  posts.push(post);
  const submitDiv = document.createElement("div");
  submitDiv.textContent = post;
  document.body.appendChild(submitDiv);
};
