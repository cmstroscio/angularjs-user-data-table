// counts remaining characters available in textbox
// displays number left and turns it red when <= 5
  $(function () {
      $("textarea[type=text]").on("keyup change", function (e) {
          var maxLength = $(this).attr('maxlength');
          if ($(this).val().length >= 5) {
              $('#charNum').css("color", "red");
          } else if ($(this).val().length < 5) {
              $('#charNum').css("color", "black");
          }
          else {
              $('#charNum').css("color", "black");
          }
      });
  });

  function countChar(val) {
        var len = val.value.length;
        if (len >= 10) {
          val.value = val.value.substring(0, 10);
        } else {
          $('#charNum').text(10 - len);
        }
  };
