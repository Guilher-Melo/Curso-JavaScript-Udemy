// IIFE -> Immediately Invoked Function Express
/* Estrutura
(function (){

}) ()
*/

(function (idade, peso, altura){
    const sobrenome = 'Souza'
    function criaNome(nome){
        return nome + " " + sobrenome
    }

    function falaNome(){
        console.log(criaNome('Guilherme'))
    }
    falaNome()

    console.log(idade, peso, altura)
}) (20, 65, 1.70)