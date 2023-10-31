const ticket = 1000;

// Descuentos
let descEstudiante = 0.80;
let descTrainee = 0.50;
let descJunior = 0.15;

document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos los elementos
    const cantidad = document.getElementById("cantidad");
    const categoria = document.getElementById("categoria");
    const totalAPagar = document.getElementById("totalAPagar");
    const btnResumen = document.getElementById("resumen");

    

    btnResumen.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
        calcularPago(); // Llamar a la función calcularPago
    });

});




function calcularPago() {
    let total = cantidad.value * ticket;
    switch (categoria.value) {
        case "estudiante":
            total = total - total * descEstudiante;
            break;
        case "trainee":
            total = total - total * descTrainee;
            break;
        case "junior":
            total = total - total * descJunior;
            break;
        default:
            break;
    }

    totalAPagar.textContent = `Total a Pagar: $${total}`;
}

const comprarTicketsLink = document.getElementById("comprarTicketsLink");
comprarTicketsLink.addEventListener("click", function () {
    window.location.href = "comprarTickets.html"; // Reemplaza "ruta-a-tu-pagina-de-compra" con la URL real de tu página de compra
});
