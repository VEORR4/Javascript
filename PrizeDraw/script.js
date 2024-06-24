var adicionar = document.getElementById("participantes") //input
var add = document.getElementById("add") //Botão add
var draw = document.getElementById("draw") //Botão draw
var tabela = document.querySelector("table tbody") //tabela
const information = document.querySelector(".information") //Div da tooltip
const tooltip = document.querySelector(".tooltip") //tooltip
var winnersList = document.getElementById("winners-list") // Lista de vencedores

// Função para exibir participantes na tabela
// function exibirParticipantes() {
//      tabela.innerHTML = "" // Limpar tabela
//      var participantesSalvos = localStorage.getItem("participantes")
//      if (participantesSalvos) {
//           var participantes = participantesSalvos.split(",")
//           participantes.forEach((p, index) => {
//                var linha = tabela.insertRow()
//                var numero = linha.insertCell()
//                var nome = linha.insertCell()
//                numero.append(index + 1)
//                nome.append(p)
//           })
//      }
// }

// Insere os valores do input na tabela e salva no localStorage
add.addEventListener("click", function () { 
     if (adicionar.value == "") {
          alert("O campo não pode estar vazio")
     } else {
          let participantesNome = adicionar.value.split(";")
          let participantesAtuais = localStorage.getItem("participantes")
          if (participantesAtuais) {
               participantesNome = participantesAtuais
                    .split(",")
                    .concat(participantesNome)
          }
          localStorage.setItem("participantes", participantesNome.join(","))
          adicionar.value = ""
          exibirParticipantes()
     }
})


draw.addEventListener('click', alert("dalisensa"))

const switchModal = () => {
     const modal = document.querySelector(".modal")
     const actualStyle = modal.style.display
     if (actualStyle == "block") {
          modal.style.display = "none"
     } else {
          modal.style.display = "block"
     }
}


// Função para sortear 20 vencedores
// draw.addEventListener("click", function () {
//      var participantesSalvos = localStorage.getItem("participantes")
//      if (participantesSalvos) {
//           var participantes = participantesSalvos.split(",")
//           if (participantes.length < 20) {
//                alert(
//                     "Não há participantes suficientes para sortear 20 vencedores."
//                )
//                return
//           }
//           var winners = []
//           while (winners.length < 20) {
//                var index = Math.floor(Math.random() * participantes.length)
//                if (!winners.includes(participantes[index])) {
//                     winners.push(participantes[index])
//                }
//           }
//           winnersList.innerHTML = ""
//           winners.forEach((winner, index) => {
//                var li = document.createElement("dialog")
//                li.append(`${index + 1}. ${winner}`)
//                winnersList.appendChild(li)
//           })
//      } else {
//           alert("Nenhum participante encontrado.")
//      }
// })





// Exibe os participantes ao carregar a página
window.addEventListener("load", exibirParticipantes)


// Mostra e oculta a tooltip com base na atividade do mouse
adicionar.addEventListener("mouseover", () => {
     tooltip.style.display = "block"
})
adicionar.addEventListener("mouseout", () => {
     tooltip.style.display = "none"
})
adicionar.addEventListener("click", () => {
     tooltip.style.display = "none"
})