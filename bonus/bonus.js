$(document).ready(function(){
  // ho selezionato le due frecce dall'html e lo ho salvate in una variabile
  var activeNext = $('.next');
  var activePrev = $('.prev');
  var circle = $('.nav i');

  // ora aggiungo l'evento click per scorrere in avanti lo slider
  activeNext.click(function() {
    nextArrow();
  });

  //scorrimento all'indietro
  activePrev.click(function() {
    prevArrow();
  });

  // eventKeyCode
  $(document).keydown(function() {
    if (event.which == 39) {
      nextArrow();
    } else if (event.which == 37) {
      prevArrow();
    }
    console.log(event.which);
  });

  // al click mostra img corrispondente al cerchio selezionato
  circle.click(function() {
    var anyI = $('.nav i');
    var anyImg = $('.images img');
    anyI.removeClass('active');
    anyImg.removeClass('active');
    $(this).addClass('active');
    if (anyI.slice(0, 1).hasClass('active') == true) {
      anyImg.slice(0, 1).addClass('active');
    } else if (anyI.slice(1, 2).hasClass('active') == true) {
      anyImg.slice(1, 2).addClass('active');
    } else if (anyI.slice(2, 3).hasClass('active') == true) {
      anyImg.slice(2, 3).addClass('active');
    } else if (anyI.slice(3, 4).hasClass('active') == true) {
      anyImg.slice(3, 4).addClass('active');
    }
  });


});


// FUNCTION
function nextArrow() {
  var checkImgLast = $('.images img.last').hasClass('active'); //torna true o false
  var activeImg = $('.images img.active');
  activeImg.removeClass('active');
  activeImg.next().addClass('active');
  //console.log(activeImg);
  if (checkImgLast == true) {
    activeImg.removeClass('active');
    $('.images img.first').addClass('active');
  }
  // scorrimrnto nav in avanti
  var checkILast = $('.nav i.last').hasClass('active'); //torna true o false
  var activeCircle = $('.nav i.active');
  activeCircle.removeClass('active');
  activeCircle.next().addClass('active');
  //console.log(activeCircle);
  if (checkILast == true) {
    activeCircle.removeClass('active');
    $('.nav i.first').addClass('active');
  }
}


function prevArrow() {
  var checkImgFirst = $('.images img.first').hasClass('active'); //torna true o false
  var activeImg = $('.images img.active');
  activeImg.removeClass('active');
  activeImg.prev().addClass('active');

  if (checkImgFirst == true) {
    activeImg.removeClass('active');
    $('.images img.last').addClass('active');
  }
  //scorrimento nav indietro
  var checkIFirst = $('.nav i.first').hasClass('active'); //torna true o false
  var activeCircle = $('.nav i.active');
  activeCircle.removeClass('active');
  activeCircle.prev().addClass('active');

  if (checkIFirst == true) {
    activeCircle.removeClass('active');
    $('.nav i.last').addClass('active');
  }
}
