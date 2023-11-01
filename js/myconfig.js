const topnav = document.getElementById("topnav");
const cover = document.getElementById("cover");
function checkscrollPos() {
    let scrollPos = window.scrollY;
    if (scrollPos >= cover.offsetHeight){
        topnav.classList.remove('hidden');
    } else {
        topnav.classList.add('hidden');
    }
}

window.addEventListener('scroll', checkscrollPos);
checkscrollPos();

    // let lastScrollTop = 0;

    // window.addEventListener("scroll", () => {
    //     const scrollTop = window.scrollY;

    //     // Check if the user is scrolling down
    //     if (scrollTop < lastScrollTop) {
    //         // Scrolling down, hide the header
    //         // cover.style.marginTop = "0px";
    //         topheader.classList.remove("d-flex");
            

    //     } else {
    //         // Scrolling up, show the header
    //         // cover.style.marginTop = "100px";
    //         topheader.classList.add("d-flex");
            
    //     }


    // });