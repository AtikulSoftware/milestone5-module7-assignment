const htmlTag = document.getElementById("htmlTag");
const switchBtn = document.getElementById("switch");

// onClick
switchBtn.addEventListener("click", () =>{
    htmlTag.classList.toggle("dark");
});