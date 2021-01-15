/*le funzioni possono stare fuori dal ready, dal momento che vengono eseguite solo dopo essere state richiamate*/
//funzioni da richiamare
function nextItem(){
  if ($('img.active').hasClass('last')) {

    $('img.active, i.active').removeClass('active');
    $('img.first, i.first').addClass('active');

  } else{
    $('img.active, i.active').removeClass('active')
      .next().addClass('active');
  }

}
function prevItem(){
  if ($('img.active').hasClass('first')) {

    $('img.active, i.active').removeClass('active');
    $('img.last, i.last').addClass('active');

  } else{
    $('img.active, i.active').removeClass('active')
      .prev().addClass('active');
  }

}

//mi assicuro che lo script parta dopo il caricamento del DOM
$(document).ready(
  function(){
    //rendo standard la dimensione delle immagini
    $('img').css({
      'width': '1280px'
    }
  )

/*+++++++++++cambio foto cliccando sulle frecce con mouse++++++++++++++*/

  $('.prev').click(
    function(){
      prevItem();
    }
  )

  $('.next').click(
    function(){
      nextItem();
    }
  )

/*+++++++++++cambio foto con frecce tastiera++++++++++++++*/
/*quando nel DOM. premiamo un tasto si attiva la funzione, con argomento 'x' che è dato da .keydown*/
  $(document).keydown(
    function(keyEvent) {
//se keydown rileva keyevent che corrisponde a .keyCode 39
      if (keyEvent.keyCode === 39) {
//allora attiva funzione click del div con classe.next
         nextItem();
      }
      if (keyEvent.keyCode === 37) {
         prevItem();
      }
    }
  )

/*++++++++++++++++cliccare sui pallini e cambiare img+++++++++++*/
  // //selezione della foto tramite i pallini (metodo lungo)
  // //seleziona il primo elemento e al click
  // $('.nav :first-child').click(function(){
  //   $('.nav i').removeClass('active') //rimuovi classe active da i
  //   $('.images img').removeClass('active')//rimuovi classe active da img
  //   $(this).addClass('active');//aggiungi active a questo elemento
  //   $('.images :first-child').addClass('active') //e alla prima img
  // })
  //
  // $('.nav > i:nth-child(2)').click(function(){
  //   $('.nav i').removeClass('active')
  //   $('.images img').removeClass('active')
  //   $(this).addClass('active');
  //   $('.images img:nth-child(2)').addClass('active')
  // })
  //
  // $('.nav > i:nth-child(3)').click(function(){
  //   $('.nav i').removeClass('active')
  //   $('.images img').removeClass('active')
  //   $(this).addClass('active');
  //   $('.images img:nth-child(3)').addClass('active')
  // })
  //
  // $('.nav > i:nth-child(4)').click(function(){
  //   $('.nav i').removeClass('active')
  //   $('.images img').removeClass('active')
  //   $(this).addClass('active');
  //   $('.images img:nth-child(4)').addClass('active')
  // })

  //selezione della foto tramite i pallini corretta in classe

  /*seleziono classe gli <i/> all'interno di un elemento class="nav" e al click avvio la funzione*/
  $('.nav i').click(function() {

    /*tutti gli elementi <i/> interni a elemento class="nav", rimuovono la loro classe="active'*/
    $('.nav i').removeClass('active');

    //l'elemento sul quale ho cliccato aggiunge la classe active a se stesso
    $(this).addClass('active');

    /*creo una variabile index che mi restituirà la posizione degli <i/> contenuti nell'elemento con class="nav", aggiungo il più per ritornare la conta degli elementi a partire da 1 altrimenti conterebbe a partire da 0 e questo genererebbe confusione*/
    var index = $('.nav i').index(this) + 1;
    //seleziona tutti i tag <img> e rimuovi la class="active"
    $('img').removeClass('active');

    /* seleziona i tag <img> che si trovano alla posizione "index" e aggiungi la class="active"*/
    $('img:nth-child( '+ index + ')').addClass('active');
  })




})//chiusura ready
