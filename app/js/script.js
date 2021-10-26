const toggle__light = document.getElementById("toggle__light");
const toggle__dark = document.getElementById("toggle__dark");
const body = document.querySelector("body");

window.matchMedia("(prefers-color-scheme: dark")
.addEventListener("change",(event) =>{
    event.matches ? toggle__dark.click() : toggle__light.click();
})

const setDarkMode = () => {
    body.classList.add("dark");
    body.classList.remove("light");
    localStorage.setItem("colorSet","dark");
}
const setLightMode = () => {
    body.classList.add("light");
    body.classList.remove("dark");
    localStorage.setItem("colorSet", "light");
}
const retrieveColorSet = () =>{
    localStorage.getItem("colorSet");
}


toggle__light.addEventListener("click", ()=>{
    toggle__light.checked ? setLightMode() : setDarkMode();
})
toggle__dark.addEventListener("click", ()=>{
     toggle__dark.checked ? setDarkMode() : setLightMode();
 })

const onReload = () =>{
    retrieveColorSet()==="dark" ? toggle__dark.click() : toggle__light.click();
}

onReload();