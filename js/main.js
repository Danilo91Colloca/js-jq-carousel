//mi assicuro che lo script parta dopo il caricamento del DOM

$(document).ready(
  function(){

    $('.next').click(//se clicco sull'elemento con class 'next'
      function(){
   /* selezionoImgClassActive. rimuovoClass'active'. passoAll'elementoPiùVicino. aggiungoClassActive*/
        $('img.active').removeClass('active').next().addClass('active')
    })
    $('.prev').click(
      function(){
        $('img.active').removeClass('active').prev().addClass('active')
    })

    //rendo standard la dimensione delle immagini 
    $('img').css({
      'width': '1280px'

    })


})
