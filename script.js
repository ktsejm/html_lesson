$(function(){

  var id = $('.header-right').attr('id');
  console.log(id);

  $('.box').hover(
    function(){
      $(this).addClass('active');
    },
    function() {
      $(this).removeClass('active');
    }
  );

  $('.btn').click(function() {
    var $result = $(this).siblings('.result');
    var $boxInner = $(this).parents().find('.box-inner');
    var $dra = $(this).parents().find('.dra');
    if ($result.hasClass('active')) {
      $result.removeClass('active');
      $boxInner.removeClass('done');
      // $dra.fadeIn(300);
    } else {
      $result.addClass('active');
      $boxInner.addClass('done');
      // $dra.fadeOut(300);
    }

  })

// .parents().find('.box')
});
