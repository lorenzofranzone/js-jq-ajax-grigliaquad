// Griglia 6x6
// ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.


$(document).ready(function(){

  // Code
  // Seleziono i box per abbinare il click
  $('.box').click(function(){

    // Chiamata Ajax
    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function (response) {
          console.log(response.response);
        },
        error: function () {
          alert("E' avvenuto un errore.");
        }
      }
    );

  });


  //////////////////////////////////////////////////
  // F U N C T I O N S
  //////////////////////////////////////////////////



//////////
});
