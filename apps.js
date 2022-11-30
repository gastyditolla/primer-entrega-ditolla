let cliente = prompt ("¡Buenos dias! Por favor introduzca su nombre de usuario")
let renovacion= prompt (`Hola ${cliente}, su plazo de prueba a finalizado, ¿desea suscribirse como miembro?`)
let precioSuscripcion = 1000;


// Pago o no de la suscripción
if (renovacion.toLowerCase() == "si") {

    let dinerocliente = parseInt(prompt("Perfecto, por favor ingrese el monto a abonar para continuar"))
    if (dinerocliente >= precioSuscripcion) {

        alert("Usted se encuentra inscripto correctamente")
    } 
    else {

        alert(`Por favor ingrese una monto mayor a $${precioSuscripcion}`)
    }
    pedidoPromo()
}
else{
    alert ("Gracias por disfrutar su periodo gratis de prueba")
}

// Bucle
function pedidoPromo (){
    let pedidoDescuento= parseInt(prompt ("Seleccione la promocion que desea:\n1. Cuadro Individual\n2.Cuadro Poliptico\n3.Cuadro Triptico\n4.Finalizar pedido"))
    let pedidoIndividual = 0;
    let pedidoPoliptico=0;
    let pedidoTriptico=0;
    while (pedidoDescuento != 4) {
        if (pedidoDescuento === 1) {
            alert("Seleccionaste un Cuadro Individual")
            pedidoIndividual++;
            
        }
        else if (pedidoDescuento === 2) {
            alert("Seleccionaste un Cuadro Poliptico")
            pedidoPoliptico++;
            
        }
        else if (pedidoDescuento === 3) {
            alert("Seleccionaste un Cuadro Triptico")
            pedidoTriptico++;
            
        }
        pedidoDescuento= parseInt(prompt ("Seleccione la promocion que desea:\n1. Cuadro Individual\n2.Cuadro Poliptico\n3.Cuadro Triptico\n4.Finalizar pedido"))
        
    }
    alert(`Usted solicito:\n${pedidoIndividual} Cuadros Individuales \n${pedidoPoliptico} Cuadros Polipticos\n${pedidoTriptico} Cuadros Tripticos `);
    alert ("Gracias por su compra")

}
