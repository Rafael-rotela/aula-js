class ValidaFormulario {
  constructor(){
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos(){
    this.formulario.addEventListener('submit', e =>{
      this.handleSubmit(e);
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhaSaoValidas();

    if (camposValidos && senhasValidas) {
      alert('Formulário enviado');
      this.formulario.submit();
    }
  }

  senhaSaoValidas(){
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value){
      valid = false;
      this.criaErro(senha,'As senha tem que ser as mesmas')
      this.criaErro(repetirSenha,'As senha tem que ser as mesmas')
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa  ter no minimo 12');
    }

    return valid;
  }

  camposSaoValidos(){
    let valid = true;

    for(let errorText of this.formulario.querySelectorAll('.erro-text')){
      errorText.remove();
    }

    for(let campo of this.formulario.querySelectorAll('.validar')){
    
      const label = campo.previousElementSibling.innerText;
    
      if(!campo.value) {
        this.criaErro(campo,`campo ${label} nao pode esta vazio`);
      }
      
      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false;
      }
   
      if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    
    }

    return valid;
  }

  validaUsuario(campo){
    const usuario = campo.value;
    let valid = true;
    if(usuario.length > 3 || usuario.length > 12){
      this.criaErro(campo,'Usuario tem ter no minimo 3 a 12 caracteres')
      valid = false
    }
    if (usuario.math(/^[a-z-A-Z0-9]+$/g)) {
      this.criaErro(campo,'O nome de Usuário precisa ter apenas letras e/ou numeros');
      valid = false;
    }
    return true;
  }

  validaCPF(campo){
    const cpf = new this.validaCPF(campo.value);

    if(!cpf.valida()){
      this.criaErro(campo,'Cpf inválido');
      return false;
    }

    return true;
  }

  criaErro(campo,msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend',div)
  }
}

const valida = new ValidaFormulario();