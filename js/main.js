//mi assicuro che lo script parta dopo il caricamento del DOM

$(document).ready(
  function(){
    //rendo standard la dimensione delle immagini
    $('img').css({
      'width': '1280px'
    });

/*+++++++++++cambio foto cliccando sulle frecce con mouse++++++++++++++*/
    $('.next').click(//quando clicco sull'elemento con class 'next'
      function(){
   /* selezionoImgClassActive. rimuovoClass'active'. passoAll'elementoPiùVicino. aggiungoClassActive*/
      $('img.active')
      .removeClass('active')
      .next().addClass('active');
      $('i.active')
      .removeClass('active')
      .next().addClass('active');
   })

   $('.prev').click(
     function(){
       $('img.active')
       .removeClass('active')
       .prev().addClass('active')
       $('i.active')
       .removeClass('active')
       .prev().addClass('active');;
   })



/*+++++++++++cambio foto con frecce tastiera++++++++++++++*/
/*quando nel DOM. premiamo un tasto si attiva la funzione, con argomento 'x' che è dato da .keydown*/
  $(document).keydown(
    function(keyEvent) {
//se keydown rileva keyevent che corrisponde a .keyCode 39
      if (keyEvent.keyCode === 39) {
//allora div class .next
         $(".next").click();
      }
      if (keyEvent.keyCode === 37) {
         $(".prev").click();
      }
  });

/*++++++++++++++++cliccare sui pallini e cambiare img+++++++++++*/
  $('.nav :first-child').click(function(){
    $('.nav i').removeClass('active')
    $('.images img').removeClass('active')
    $(this).addClass('active');
    $('.images :first-child').addClass('active')
  })

  $('.nav > i:nth-child(2)').click(function(){
    $('.nav i').removeClass('active')
    $('.images img').removeClass('active')
    $(this).addClass('active');
    $('.images img:nth-child(2)').addClass('active')
  })

  $('.nav > i:nth-child(3)').click(function(){
    $('.nav i').removeClass('active')
    $('.images img').removeClass('active')
    $(this).addClass('active');
    $('.images img:nth-child(3)').addClass('active')
  })
  
  $('.nav > i:nth-child(4)').click(function(){
    $('.nav i').removeClass('active')
    $('.images img').removeClass('active')
    $(this).addClass('active');
    $('.images img:nth-child(4)').addClass('active')
  })










})//chiusura ready
