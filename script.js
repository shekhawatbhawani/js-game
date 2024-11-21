let allBox = document.querySelectorAll(".box");
let container = document.querySelector(".container");
let restart = document.querySelector(".restart")


let random = Math.round(Math.random() * 24);
console.log(random);
let click = true;

allBox.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (click) {
      if (index === random) {
        element.style.background = "red";
        let div = document.createElement("div");
        div.classList.add("raj");
        div.textContent = "💔 You lose the game! 😢";
        div.innerHTML = `<p class="lose"> 💔 You lose the game! 😢 </p>
        <button>❌</button>`;
        container.append(div);
        let button = document.querySelector("button")
        let raj = document.querySelector(".raj")
        button.addEventListener("click",()=>{
          raj.style.display = "none"
        })
        click = false;
      } else {
        element.style.background = "green";
      }
    }
  });
});
restart.addEventListener("click",()=>{
  window.location.reload()
})