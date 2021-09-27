let visiBle = 0;

function showDiv(){
    $(".big-number-circle").hide();
    $(".big-number-circle:eq(" + visiBle + ")").show();
}

showDiv();

function shown(){
    if(visiBle == $(".big-number-circle").length-1){
        visiBle = 0
    } else {
        visiBle ++
    }

    showDiv();
}

function back(){
    if(visiBle == 0){
        visiBle =  $(".big-number-circle").length-1;
    } else {
        visiBle --;
    } 
    showDiv();
}