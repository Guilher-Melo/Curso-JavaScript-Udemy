import GeraCPF from './modules/GeraCPF';
import './assets/CSS/style.css';

function executa() {
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = gera.geraNovoCpf()
}

let botao = document.querySelector('.botao-gera')
botao.addEventListener('click', executa)