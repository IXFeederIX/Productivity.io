function isBee(){
const imgTheme = document.querySelector(".imgTheme")
const loadingContainer = document.querySelector(".container")
imgTheme.src = "bee2.png"
document.body.style.backgroundColor = "orange"
loadingContainer.style.borderColor = "black"
loadingContainer.style.animation = "none"
loadingContainer.style.backgroundColor ="whitesmoke"
}
isBee()