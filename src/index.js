import "./index.css";

const output = document.querySelector(".app .output");
const input = document.querySelector(".app .input");

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

const handleChange = event => updateOutput(event.target.value);

input.addEventListener("input", handleChange);

updateOutput(input.value);
