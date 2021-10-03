

$(document).ready(function(){


    
const navbar = $("#navbar");
$(window).on("scroll", function(){
    if($(this).scrollTop() > 90){
        $("#navbar").addClass('nav-shadow');
    }
    else{
        $("#navbar").removeClass('nav-shadow'); 
    }
})





    $('.features-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
//   screenshots owl carousel
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });



    //our client says about us
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
  




    //team member section 9
    $('.team-member').owlCarousel({
        loop:true,
        margin: 40 ,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
               
            },
            500:{
                items:2,
                margin:50
            },
            900:{
                items:3
            }
        }
    });




    $.scrollIt({
        topOffset :     0
    })
  
  });


// ---X--- video popup class ---X---



//accordion item
// const accordionItem = $(".accordion-item");
// const accordionButton = $(".accordion-button");

// accordionItem.addEventListenter("click", ()=>{
//     accordionButton.classList.toggle("indigoitem")
// });