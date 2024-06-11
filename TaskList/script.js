const cards = document.querySelectorAll(".card");
const dropZones = document.querySelectorAll(".container");
const btnAdd = document.getElementById("btnAdd");
const containerNotStarted = document.getElementById("notStarted");

btnAdd.addEventListener("click", addCard)

function addCard(){
    containerNotStarted.createElement()
    
}

cards.forEach(card => {
    card.addEventListener("dragstart", dragStart);
});

dropZones.forEach(dropZone => {
    dropZone.addEventListener("dragover", dragOver);
    dropZone.addEventListener("drop", dragDrop);
});

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
    const draggedCard = event.target.closest(".card");
    const dropZone = event.target.closest(".container");

    // Remove classes de destaque de todas as zonas de queda
    dropZones.forEach(zone => zone.classList.remove("highlight", "dragging-over"));

    if (draggedCard) {
        dropZone.classList.add("highlight");
        // Adiciona classe 'dragging-over' para destacar a zona de destino
        dropZone.classList.add("dragging-over");
    }
}

function dragDrop(event) {
    const cardId = event.dataTransfer.getData("text/plain");
    const draggedCard = document.getElementById(cardId);
    const dropZone = event.target.closest(".container");

    if (draggedCard && dropZone) {
        // Move o cartão para o contêiner de destino
        dropZone.appendChild(draggedCard);
    }

    // Remove classes de destaque de todas as zonas de queda
    dropZones.forEach(zone => zone.classList.remove("highlight", "dragging-over"));
}


