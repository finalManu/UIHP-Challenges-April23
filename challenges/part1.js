/** Write your code below */
let post = "";
jsInput = document.querySelector("input");
jsDiv = document.querySelector("div");

//another way to do it
//jsInput.addEventListener("input", handleInput);

jsInput.oninput = handleInput;

function handleInput() {
  post = jsInput.value;
  jsDiv.textContent = post;
}
