
const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-50%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-100%)';
      e.target.classList.add('active');
    }
  }
});



const menu = document.querySelector("#menu");


const clickMenu = () =>{
  if(menu.checked){
    const container = document.querySelector('.nav-menu');
    container.style.display = 'flex'
  } else {
    const container = document.querySelector('.nav-menu');
    container.style.display = 'none'
  }
}