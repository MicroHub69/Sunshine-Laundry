$(document).ready(function(){

    $(".fancy-button").click(function(){
        $(".toggle-on-click").show(function(){
            $(".toggle-img--FAQ,.why-choose-us").hide()
        })
    })
    $(".fancy-button1").click(function(){
        $(".toggle-img--FAQ").show(function(){
            $(".toggle-on-click,.why-choose-us").hide()
        })
    })
    $(".fancy-button2").click(function(){
        $(".why-choose-us").show(function(){
            $(".toggle-on-click,.toggle-img--FAQ").hide()
        })
    })/////MAIN BUTTON


    $(".first-question").click(function(){
        $(".first-answer").toggle(300)
    })
    $(".first-question1").click(function(){
        $(".first-answer1").toggle(300)

    })
    $(".first-question2").click(function(){
        $(".first-answer2").toggle(300)
    })
    $(".first-question3").click(function(){
        $(".first-answer3").toggle(300)
    })//////FAQ TOGGLE CLASS

});



    $(".prize-carousel").owlCarousel({
     loop: true,
     
     autoplayTimeout: 4000,
     autoplayHoverPause:true
    });



