var adicionar = document.getElementById("participantes") //input
var insert = document.getElementById("insert") //Botão insert
var tabela = document.querySelector("table tbody") //tabela
const information = document.querySelector('.information') //Div da tooltip
const tooltip = document.querySelector('.tooltip') //tooltip


//Insere os valores do input na tabela, numerados e separados por linha
insert.addEventListener('click', function(){
     if (adicionar.value == ""){
          alert("O campo não pode estar vazio")
     }else {
          let participantesNome = participantes.value.split(";")
          localStorage.setItem("participantes", participantesNome)

          function exibirParticipantes(){
               var participantesSalvos = localStorage.getItem("participantes")
               console.log(participantesSalvos)
               // if (participantesSalvos){
               //      document,getElementById("participantesNome").textContent = "participantes"
               // }
          }
          
          
          
          
          // for (let p of participantesNome) {
          //      const contarLinhas = document.querySelectorAll("tr")
          //      var linha = tabela.insertRow()
          //      var numero = linha.insertCell()
          //      var nome = linha.insertCell()
          //      numero.append(contarLinhas.length)
          //      nome.append(p)
          }    
          adicionar.value = ""
     }
// }
)

//Mostra e oculta a tooltip com base na atividade do mouse
adicionar.addEventListener('mouseover', ()=>{
     tooltip.style.display = 'block';
})
adicionar.addEventListener('mouseout', ()=>{
     tooltip.style.display = 'none'
})
adicionar.addEventListener("click", () =>{
     tooltip.style.display = "none"
})


