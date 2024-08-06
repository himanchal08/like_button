const btn = document.querySelector("button");
const h = document.querySelector("h2");
const h1 = document.querySelector("h1");
const img = document.querySelector("img");
const like = document.querySelector(".card i");
const mouse = document.querySelector(".card");
const cursr = document.querySelector(".cursor i");
const check = document.querySelector("#checkbox");
const darkMode = document.querySelector(".dark-mode");
const save = localStorage.getItem("theme");

btn.addEventListener("click",() =>{
    if (btn.style.backgroundColor === "rgb(50, 219, 50)") {
        btn.style.backgroundColor = "red";
        btn.innerHTML="Vacation Off"
        h.style.color=" rgb(50, 219, 50)";
        h.innerHTML = "Visited";
    }
    else{
        btn.style.backgroundColor = " rgb(50, 219, 50)";

        btn.innerHTML="Vacation On"
        h.innerHTML = "Not Visited";
        h.style.color="red";
        
    }
});
img.addEventListener("dblclick",()=>{
    like.style.transform="translate(-50%,-50%) scale(1)";
    setTimeout(() => {
        like.style.transform="translate(-50%,-50%) scale(0)";
    },1568)
    });
    

    
    if (save === "dark") {
      check.checked = true;
      darkMode.classList.add("active");
    } else {
      check.checked = false;
      darkMode.classList.remove("active");
    }
    
    check.addEventListener("change", () => {
      if (check.checked) {
        darkMode.classList.add("active");
        h1.classList.add("shine");
        mouse.classList.add("shine");
        btn.classList.add("shine");
        img.classList.add("shine");
        localStorage.setItem("theme", "dark");
      } else {
        darkMode.classList.remove("active");
        h1.classList.remove("shine");
        mouse.classList.remove("shine");
        btn.classList.remove("shine");
        img.classList.remove("shine");
        localStorage.setItem("theme", "light");
      }
    });
    

