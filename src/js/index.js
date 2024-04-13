const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

let quantidadeDeProjetos = 4;

var ativacao_do_botao_mostrar = new Boolean(false);

document.addEventListener("DOMContentLoaded", function () {
  mostrarProjetos(quantidadeDeProjetos);
});

btnMostrarProjetos.addEventListener('click', mostrarMaisProjetos)

function mostrarProjetos(quantidadeProjetos) {
  const projetos = document.querySelectorAll('.projeto');

  for (let i = 0; i < quantidadeProjetos; i++) {
    if (projetos[i]) {
      projetos[i].classList.add('ativo')
    }
  }
  alert("mostrando")
}

function esconderProjetos(quantidadeProjetos){
  const projetos = document.querySelectorAll('.projeto.ativo');
  alert(projetos.length)
  alert("esconder")
  alert(quantidadeProjetos)

  for (let i = quantidadeProjetos;i == 0; i--) {
    if (projetos[i]) {
      projetos[i].classList.add('none')
    }
  }
  alert("saindo do for")
}

function mostrarMaisProjetos() {
  if (ativacao_do_botao_mostrar == false){
    alert("ta ok")
    const quantidadeTotalProjetos = document.querySelectorAll('.projeto').length;
    quantidadeDeProjetos += 4; // Incrementa mais 4 projetos a serem mostrados
    mostrarProjetos(quantidadeDeProjetos);

    if (quantidadeDeProjetos >= quantidadeTotalProjetos) {
      btnMostrarProjetos.innerHTML = "Mostrar menos";
    }
    ativacao_do_botao_mostrar=true;
  }
  
  else{
    alert("deu merda")
    const quantidadeTotalProjetos = document.querySelectorAll('.projeto.ativo').length;
    quantidadeDeProjetos ; // Incrementa mais 4 projetos a serem mostrados
    console.log("vai entrar na funcao");
    esconderProjetos(quantidadeDeProjetos);
    console.log("saiu dela");

    if (quantidadeDeProjetos >= quantidadeTotalProjetos) {
      btnMostrarProjetos.innerHTML = "Mostrar mais";
      ativacao_do_botao_mostrar=false;
    }
  }
}
