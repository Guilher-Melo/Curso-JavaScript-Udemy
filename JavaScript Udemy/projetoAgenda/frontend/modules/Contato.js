import validator from "validator";
export default class Contato{
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }
    init(){
        this.events();
    }
    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e=>{
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e){
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        for(let errorText of this.form.querySelectorAll('.error-text')){
            errorText.remove()
        }

        if(emailInput.value && !validator.isEmail(emailInput.value)){
            this.criaErro(emailInput, "Email inválido");
            error = true;
        }

        if(!nomeInput.value){
            this.criaErro(nomeInput, "Nome é um campo obrigatório")
            error = true;
        }

        if(!emailInput.value && !telefoneInput.value){
            this.criaErro(telefoneInput, "Pelo menos um dos contatos é obrigatório: telefone ou email" )
            error = true;
        }

        if(!error) el.submit();
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }
}