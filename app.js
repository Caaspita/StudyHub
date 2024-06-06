
const checkBox = document.getElementById("menu_hamburguesa");
const menu = document.querySelector(".header_menu");

checkBox.addEventListener("click", () =>{
    menu.classList.toggle("displaynone");
    console.log("active");
})