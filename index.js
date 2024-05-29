const menu = document.querySelector('#menu'); 
const steve = document.querySelector('#steve');
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


