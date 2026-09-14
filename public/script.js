const button = document.querySelector("#button");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  const name = localStorage.getItem("name") || "stranger";
  output.textContent = `Hello ${name}!`;
});