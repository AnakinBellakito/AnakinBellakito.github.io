const animeweb = document.getElementById("animeweb")

const pyJuegos = document.getElementById("pyJuegos")

const JavaGame = document.getElementById("JavaGame")

const sodoku = document.getElementById("sodoku")

const c = document.getElementById("c++")

const SyntoApp = document.getElementById("SyntoApp")


const switchElement = document.querySelector(".switch")

switchElement.addEventListener("click", () => {
    document.body.classList.toggle('dark')
})

animeweb.addEventListener("click", () => {
    window.open("https://github.com/AnakinBellakito/animeWeb.git")
})

pyJuegos.addEventListener("click", () => {
    window.open("https://github.com/AnakinBellakito/animeOraclePy.git")
})
JavaGame.addEventListener("click", () => {
    window.open("https://github.com/AnakinBellakito/Lp_Imp/tree/main/Java")
})
sodoku.addEventListener("click", () => {
    window.open("https://github.com/AnakinBellakito/sodoku.git")
})
c.addEventListener("click", () => {
    window.open("https://github.com/AnakinBellakito/DataStructures_HW")
})
SyntoApp.addEventListener("click", () => {
    window.open("https://github.com/AnakinBellakito/SyntoApp")
})

