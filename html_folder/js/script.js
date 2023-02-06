const mobile_nav = document.querySelector(".mobile_menu");
const head = document.querySelector(".head");
const togglenav=()=>{
    head.classList.toggle("active");
}
mobile_nav.addEventListener('click',()=> togglenav());
