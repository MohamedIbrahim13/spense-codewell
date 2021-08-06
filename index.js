const burger = document.querySelector("#burger")
const menu = document.querySelector("#menu")

burger.addEventListener("click", e => {
  if (menu.classList.contains("hidden")) {
    //burger.classList.add("hidden")
    menu.classList.remove("hidden")
    menu.classList.add("block")
  } else {
    menu.classList.add("hidden")
  }
})
