let allBox = document.querySelectorAll(".box");
let container = document.querySelector(".container");

let random = Math.round(Math.random() * 24);
console.log(random);
let click = true;

allBox.forEach((element, index) => {
  if (click) {
    element.addEventListener("click", () => {
      if (index === random) {
        element.style.background = "red";
        let div = document.createElement("div");
        div.classList.add("raj");
        div.textContent = "💔 You lose the game! 😢";
        div.innerHTML = `<p class="lose"> 💔 You lose the game! 😢 </p>
       <button>❌</button>`;
        container.append(div);
        click = false;
      } else {
        element.style.background = "green";
      }
    });
  }
});
