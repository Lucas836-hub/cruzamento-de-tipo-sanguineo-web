const botao = document.querySelector('.btn-calcular');
var todos_tipos=[[["a", "a"],[ "a", "i"]],[["b", "b"], ["b", "i"]],[["a", "b"]],[["i", "i"]]];

var select = document.getElementById('lista_pai')
select.addEventListener('change', function(){
    sangue_pai = todos_tipos[select.value];
})

var select = document.getElementById('lista_mae')
select.addEventListener('change', function(){
    sangue_mae = todos_tipos[select.value];
    console.log("passou pela mae");
    console.log(sangue_mae);
})

var select = document.getElementById('lista_filho')
select.addEventListener('change', function(){
    sangue_filho = todos_tipos[select.value];
})

let vazio=0;

function De_alelo_para_letra(alelos){
  // decodifica os alelos para o tipo sanguineo
  if (alelos == "aa" || alelos == "ai" || alelos == "ia") {
    return "A";
  }if (alelos == "bb" || alelos == "bi" || alelos == "ib") {
    return "B";
  }if (alelos == "ab" || alelos == "ba") {
    return "AB";
  }if (alelos == "ii") {
    console.log("tipo O selecionado");
    return "O";
  }

}

function cruzamento(){
   vazio=0;
}

botao.onclick = function() {
  global sangue_mae
  console.log("testando");
  console.log(sangue_mae);
  //console.log(sangue_mae);
  //resposta.innerHTML="<br>Mãe tipo sanguineo ",De_alelo_para_letra(sangue_mae[0]);
};