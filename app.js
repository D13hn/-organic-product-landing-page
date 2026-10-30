const btnav = document.getElementById("btnav")
const navlist = document.getElementById("navlist")

btnav.addEventListener("click", () =>{
    navlist.classList.toggle("navlist-active")
})