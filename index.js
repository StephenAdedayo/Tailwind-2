const menu = document.querySelector('#menu');
const steve = document.querySelector('#steve');
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hlinks = document.querySelectorAll("#hlink")

menu.addEventListener("click", () => {
  steve.classList.toggle("hidden")
  menu.classList.toggle("bg-white")
})

hlinks.forEach(link => {
    link.addEventListener("click", () => {
        steve.classList.toggle("hidden")
        menu.classList.toggle("bg-white")
      }) 

})

moon.addEventListener("click", () => {
    body.classList.toggle("dark")
  })


