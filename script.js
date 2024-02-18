/* Exercise 1: Wish list */

function addToList(item){

    $('#items').append(`<li>${item}<span class='label pending'>Pending</span></li>`);

}

$(document).on('click','#add-to-list', function(){

    addToList( `${$('#item').val()}`);
    $('#item').val('')//limpiar input
    $('#item').trigger('focus'); //mantiene el focus
    //(cursor en el input de texto) cuando añado un item 
    //a la lista). 
    //Se puede hacer un .trigger('focus') o un .focus() pero creo q el ultimo esta deprecated
    updateTotals();
    
});


$(document).on('click', '.pending', function() {
    var li_node = $(this).parent();
    li_node.append('<span class="label success">Done!</span>');
    $(this).remove(); // Remove the 'Pending' label
    li_node.addClass('completed');//le añade el tachado de palabra metiendole la clase completed
    updateTotals();

});


function updateTotals(){

let pendingItems = $('.pending').length //propiedad q te dice cuantos elementos hay de ese selector
console.log(pendingItems);
let completedItems = $('.completed').length
console.log(completedItems);

$(".total").text(`Completed tasks:${completedItems} vs. Pending tasks:${pendingItems}`)

}