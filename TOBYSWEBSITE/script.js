let about = document.getElementById("about")
let me = document.getElementById("me")
let mainContainer = document.getElementById("main-container")
let webContainer = document.getElementById("web-container")
let graphicContainer = document.getElementById("graphic-container")
let graphics = document.getElementById("graphics")
let web = document.getElementById("web")


me.addEventListener("click", () => {
    about.style.display = "block"
    mainContainer.style.display = "none"

})

about.addEventListener("click", () => {
    about.style.display = "none"
    mainContainer.style.display = "block"

})

graphics.addEventListener("click", () => {
    if(graphicContainer.style.display === "none"){
        graphicContainer.style.display = "block"
    } else {
        graphicContainer.style.display = "none"
    }
})

web.addEventListener("click", () => {
    if(webContainer.style.display === "none"){
        webContainer.style.display = "block"
    } else {
        webContainer.style.display = "none"
    }
})


