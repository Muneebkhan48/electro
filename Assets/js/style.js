// Get the button

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// --------Currency Dropdown------
if ($(".dropdown2").length) {
  $(document).on("click", ".dropdown-menu2  .dropdown-item2 ", function (e) {
      e.preventDefault();
      if (!$(this).hasClass("active")) {
          var swalWithBootstrapButtons = Swal.mixin({
              customClass: {
                  confirmButton: "btn ",
                  cancelButton: "btn  me-3",
              },
              buttonsStyling: false,
          });
          swalWithBootstrapButtons
              .fire({
                  title: "Are you sure?",
                  text: "Do you really want to change your current language!",
                  icon: "warning",
                  confirmButtonText: "<i class='fas fa-check-circle me-1'></i> Yes, I am!",
                  cancelButtonText: "<i class='fas fa-times-circle me-1'></i> No, I'm Not",
                  showCancelButton: true,
                  reverseButtons: true,
                  focusConfirm: true,
              })
              .then((result) => {
                  if (result.isConfirmed) {
                      if (!$(this).hasClass("active")) {
                          $(".dropdown-menu2 .dropdown-item2").removeClass("active");
                          $(this).addClass("active");
                          $(this)
                              .parents(".dropdown2")
                              .find(".btn")
                              .html("<span class='flag-icon flag-icon-us me-1'></span>" + $(this).text());
                      }
                      Swal.fire({
                          icon: "success",
                          title: "Amazing!",
                          text: "Your current language has been changed successfully.",
                          showConfirmButton: false,
                          timer: 1500,
                      });
                  }
              });
      }
  });
}
// -------Slider1--------


$(document).ready(function(){
    $('.slider1').slick({
  dots: true,
  infinite: false,
  speed: 300,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  });

//   -------slider2--------

$(document).ready(function(){
    $('.slider2').slick({
  infinite: false,
  speed: 300,
  autoplay: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint: 600,
      settings: {
       
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  });

//   ----slider3-----
$(document).ready(function(){
  $('.slider3').slick({
    infinite: true,
    centerMode: true,
    
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    asNavFor: '.slider4',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          // centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          // centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,  
          // centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

//   ------slider4------


$(document).ready(function(){
  $('.slider4').slick({
    
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows:true,
    asNavFor: '.slider3',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          // centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          dots:true,
          // centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          dots:true,
          // centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});


// -------slider5-------

$(document).ready(function(){
  $('.slider5').slick({
infinite: false,
speed: 300,
autoplay: false,
slidesToShow: 4,
slidesToScroll: 1,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      arrows: false,
      dots:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      
    }
  },
  {
    
    breakpoint: 600,
    settings: {
      arrows: false,
      dots:true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    
    breakpoint: 480,
    settings: {
      arrows: false,
      dots:true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});
});


// -------slider6-------

$(document).ready(function(){
  $('.slider6').slick({
infinite: false,
speed: 300,
autoplay: false,
slidesToShow: 1,
dots:true,
slidesToScroll: 1,
arrows: false,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});
});












  
  // -------increment / decrement--------

  

var incrementPlus;
var incrementMinus;

var buttonPlus  = $(".cart-qty-plus");
var buttonMinus = $(".cart-qty-minus");

var incrementPlus = buttonPlus.click(function() {
	var $n = $(this)
		.parent(".button-container")
		.parent(".wrapper")
		.find(".qty");
	$n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() {
		var $n = $(this)
		.parent(".button-container")
		.parent(".wrapper")
		.find(".qty");
	var amount = Number($n.val());
	if (amount > 0) {
		$n.val(amount-1);
	}
});




  //  ----------product gallrey----------

  const mainImage = document.getElementById("main-image");
const images = document.querySelectorAll(".product__image");

images.forEach((image) => {
    image.addEventListener("click", (event) => {
        mainImage.src = event.target.src;

        document
            .querySelector(".product__image--active")
            .classList.remove("product__image--active");

        event.target.classList.add("product__image--active");
    });
});




// -----------password eye icon-----------

const  togglePassword = document.querySelectorAll('.togglePassword');
const  password = document.querySelectorAll('.id_password');

$(document).ready(function(){
  
  $('.togglePassword').on('click', function(){
    var passInput=$(".id_password");
    if(passInput.attr('type')==='password')
    {
         
         passInput.attr('type','text');
     }else{
        passInput.attr('type','password');
     }
 })
})

// ---------page loader------


    
  function Function(){
    setTimeout(function(){
      // alert();
      var wraper = document.getElementById("page-loader-wrapper").style.display ='none';
      // wraper.style = "display:none";
      var loader = document.getElementById("loader").style.display ='none';
         
    }, 1000);

  }





