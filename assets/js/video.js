$(document).ready(function(){
    $(".first-question").click(function(){
        $(".first-answer").toggle(500)
    })
    $(".first-question1").click(function(){
        $(".first-answer1").toggle(500)
    })
    $(".first-question2").click(function(){
        $(".first-answer2").toggle(500)
    })
    $(".first-question3").click(function(){
        $(".first-answer3").toggle(500)
    })//////FAQ TOGGLE CLASS



    $(".fancy-button").click(function(){
        $(".toggle-on-click").show(function(){
            $(".toggle-img--FAQ").hide()
        })
    })
    $(".fancy-button1").click(function(){
        $(".toggle-img--FAQ").show(function(){
            $(".toggle-on-click").hide()
        })
    })
    $(".fancy-button2").click(function(){
        $(".toggle-on-click").show()
    })




});



