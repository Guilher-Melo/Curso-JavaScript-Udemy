const div = document.querySelector("div")
const paragrafos = div.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body)
const backgroundEstilo = estiloBody.backgroundColor

for (let p of paragrafos){
    p.style.backgroundColor = backgroundEstilo
    p.style.color = "white"
}