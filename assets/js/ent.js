const firstBanner = document.querySelectorAll(".primary_banner")
const secondBanner = document.querySelectorAll(".primary_banner1")

firstBanner.addEventListener("onload", change);

function change () {
    if(firstBanner === ""){
        firstBanner.classList.add = (".primary_banner1")
    }

    setTimeout(firstBanner,3000)
}

change()