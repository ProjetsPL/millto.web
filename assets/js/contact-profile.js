const checkContactMobileBtn = document.querySelector("#contactMobileBtn");
if (typeof(checkContactMobileBtn) != 'undefined' && checkContactMobileBtn != null) {

    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    };

    const  contactMobileButton = document.querySelector("#contactMobileBtn"),
    contactMobileContainer = document.querySelector("#contactMobileCtn");

    contactMobileBtn.addEventListener("click", function(e) {
    contactMobileCtn.classList.toggle("open");
        e.stopPropagation();
    }, false);

    document.addEventListener("click", function() {
        contactMobileCtn.classList.remove("open");
    }, false);

    const  topLine = document.querySelector("#topLine");
    let lastScrollTop = 0;
    window.addEventListener("scroll", throttle(function(){ 
        var st = window.pageYOffset ;
        if (st > lastScrollTop){
            topLine.classList.add("invisible");
        } else {
            topLine.classList.remove("invisible");
            contactMobileCtn.classList.remove("open");
        }
        lastScrollTop = st;
    },  100));
}