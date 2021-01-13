//mi assicuro che lo script parta dopo il caricamento del DOM

$(document).ready(
  function(){
    $('.next').click(
      function(){
        $('img.active').removeClass('active').next().addClass('active')
    })
    $('.prev').click(
      function(){
        $('img.active').removeClass('active').prev().addClass('active')
    })




})
