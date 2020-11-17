(function($,window) {
  $(function(){
    //この中に処理を書きます
    $('h2').remove(); //課題１

    alert($('#index').text()); //課題２
    alert($('#index').html()); //課題２

    $('ul#index').append('<li>メソッド</li>'); //課題3

    $('#index').find('li').each(function() {
      alert($(this).text().length);
    }); //課題4

    $('#index').find('li').each(function(){
      var count = ("[" + $(this).text().length + "文字]");
      $(this).append(count);
    }); //課題５



  });
})(jQuery,window);
　
