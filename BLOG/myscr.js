$(document).ready(function () {

  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
})

function newTodo() {

  var heading = document.getElementById("name").value;

  if (heading == "") {
    alert(" please fill something in the heading and click on create");
    return false;
  }

  var descript = document.getElementById("comments").value;

  if (descript == "") {
    alert("Please right something for your blog description");
    return false;
  }

  document.getElementById("demo").innerHTML = heading;

  document.getElementById("demo2").innerHTML = descript;
}

function contact() {

  var contact_name = document.getElementById("name").value;

  if (contact_name == "") {
    alert(" please write your name");
    return false;
  }

  var emal = document.getElementById("email").value;

  if (emal == "") {
    alert("Please provide your email");
    return false;
  }

  var com = document.getElementById("comments").value;

  if (com == "") {
    alert("Please provide some description");
    return false;
  }

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emal)) {
    document.getElementById("ack").innerHTML = "Thanks, we will reach you soon";
    return (true)
  } else {
    document.getElementById("wrongemail").innerHTML = "Please provide a proper email";
    return false;
  }


}