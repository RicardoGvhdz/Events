
$(document).ready(function() {
    let cartVisible = false;
    let optionsVisible = false;

    // Función para mostrar/ocultar el carrito
    $('#cart-button-1').click(function() {
        if (cartVisible) {
            $('#cart-window').fadeOut(); // Oculta la ventana del carrito
        } else {
            $('#cart-window').fadeIn(); // Muestra la ventana del carrito
        }
        cartVisible = !cartVisible; // Cambia el estado de visibilidad
    });

    // Función para mostrar/ocultar la ventana de opciones
    $('#cart-button-2').click(function() {
        if (optionsVisible) {
            $('#options-window').fadeOut(); // Oculta la ventana de opciones
        } else {
            $('#options-window').fadeIn(); // Muestra la ventana de opciones
        }
        optionsVisible = !optionsVisible; // Cambia el estado de visibilidad
    });

    // Función para mostrar el submenú al pasar el mouse
    $('.menu-item').mouseenter(function() {
        $(this).find('.submenu').slideDown();
    });

    // Función para ocultar el submenú cuando el mouse sale
    $('.menu-item').mouseleave(function() {
        $(this).find('.submenu').slideUp();
    });
});
