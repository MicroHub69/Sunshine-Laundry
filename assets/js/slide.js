var i = 0;
var banners = [];
var time = 5000;


//images List
banners[0].classList.add = (".primary_banner");
banners[1].classList.add = (".primary_banner1");

function ChangeBanner(){
    document.onload.classList = banners[i];

    if(i < banners.length - 1){
        i++
    }else{
        i = 0
    }

    setTimeout("ChangeBanner()", time);
}