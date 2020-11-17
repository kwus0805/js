//js０３　課題２

(function($, window) {
      $('#login').on('click', function() {
        checkemail(email);
        checkpassword(password);
      });

      function checkemail(email){
        var email = $('#email').val();
        if (email == '') {
          alert('メールアドレスを入力してください');
        } else if (email.indexOf('@') < 0) {
          alert('メールアドレスには必ず「@」が必要です');
        }};
      function checkpassword(password){
        var password = $('#password').val();
        if (password == '') {
          alert('パスワードを入力してください');
        } else if (password.length < 6) {
          alert('パスワードは6文字以上です');
        }};
  })(jQuery, window);
