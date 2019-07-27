import "./index.css";

const output = document.querySelector(".app .output");
const input = document.querySelector(".app .input");
const reset = document.querySelector(".app .reset");

const suffixes = ["opf", "scr", "fr"];

const transform = value =>
  value
    .split("")
    .map(y =>
      /[a-zA-Z]/.test(y)
        ? `&${y + suffixes[Math.round(Math.random() * (suffixes.length - 1))]};`
        : y
    )
    .join("");

const updateOutput = value => {
  output.innerHTML = transform(value);
};

updateOutput(input.value);

const handleInput = event => updateOutput(event.target.value);

const handleReset = () => {
  input.value = "";
  updateOutput("");
};

input.addEventListener("input", handleInput);
reset.addEventListener("click", handleReset);
