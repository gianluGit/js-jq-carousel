$(document).ready(function(){
  // ho selezionato le due frecce dall'html e lo ho salvate in una variabile
  var activeNext = $('.next');
  var activePrev = $('.prev');

  // ora aggiungo l'evento click
  activeNext.click(function() {
    var checkClassFirst = $('.images img.first').hasClass('active'); //torna true o false
    var checkClassLast = $('.images img.last').hasClass('active');
    var checkClassLastPrev = $('img.last').prev().hasClass('active');
    $('img.first').removeClass('active');
    //console.log($('.images img.active'));
    if (checkClassFirst == true) {
      $('img.first').next().addClass('active');
    } else if (checkClassFirst == false && checkClassLastPrev == false && checkClassLast == false) {
      $('img.first').next().removeClass('active');
      $('img.last').prev().addClass('active');
    } else if (checkClassLastPrev == true && checkClassLast == false) {
      $('img.last').prev().removeClass('active');
      $('img.last').addClass('active');
    } else {
      $('img.last').removeClass('active');
      $('img.first').addClass('active');
    }

  });
  activePrev.click(function() {

  });

});
