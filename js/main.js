/* OWL Carousel */
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        StartPosition: 1,
        items: 3
    });
  });

  var owl = $('.owl-carousel');


$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})


/* Nav Menu */
const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
    menuIcon.classList.toggle('menu-icon-active');
}

/* RegEx pentru formular */

const nameInput = document.getElementById("Name");
const messageInput = document.getElementById("Message");

nameInput.addEventListener("input", () => {
  const regex = /^[a-zA-Z\s,'-]+$/;
  if (!regex.test(nameInput.value)) {
    nameInput.setCustomValidity("Please enter a valid name");
  } else {
    nameInput.setCustomValidity("");
  }
});

messageInput.addEventListener("input", () => {
  const regex = /^[a-zA-Z\s,.!?'"()-]+$/;
  if (!regex.test(messageInput.value)) {
    messageInput.setCustomValidity("Please enter a valid message");
  } else {
    messageInput.setCustomValidity("");
  }
});

/* Login */

function login(){

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if(username == "Victoria" && password == "victoria."){
      open('index.html')
  } else{
    alert("Username sau password gresit")
  }
}
