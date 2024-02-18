/* Exercise 1: Wish list */

function addToList(item){

    $('#items').append(`<li>${item}</li>`);

}

$(document).on('click','#add-to-list', function(){

    addToList( `${$('#item').val()}`);
    $('#item').val('')//limpiar input
    $('#item').trigger('focus'); //mantiene el focus
    //(cursor en el input de texto) cuando añado un item 
    //a la lista). 
    //Se puede hacer un .trigger('focus') o un .focus() pero creo q el ultimo esta deprecated
});
