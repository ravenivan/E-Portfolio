function openMenu() {
    document.body.classList.add("open");
}

function closeMenu() {
    document.body.classList.remove("open");
}

function switchModes() {
    let root = document.documentElement;
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);

    if (rs.getPropertyValue('--primary') === '#000000') {
        root.style.setProperty('--primary', "white");
        root.style.setProperty('--secondary', "#161B22");
        root.style.setProperty('--box-shadow', 'rgba(255, 255, 255, 0.7)');
        document.querySelector('#blob__color').setAttribute("fill", "gainsboro");
        document.querySelector('#blob__color2').setAttribute("fill", "gainsboro");
        document.querySelector('#blob__color3').setAttribute("fill", "gainsboro");
    } else {
        root.style.setProperty('--primary', "#000000");
        root.style.setProperty('--secondary', "white");
        root.style.setProperty('--box-shadow', 'rgba(0, 0, 0, 0.1)')
        document.querySelector('#blob__color').setAttribute("fill", "#000000");
        document.querySelector('#blob__color2').setAttribute("fill", "#000000");
        document.querySelector('#blob__color3').setAttribute("fill", "#000000");
    }
    
}

/* service_rqm9bwq */
/* template_xuizs8p */
/* -kBOZkcSo6PIMZ9mi */

async function sendEmail(event) {
    event.preventDefault();
    const body = document.body;
    const loading = document.querySelector('.contact__form__loading');
    const form = document.querySelector('.contact__form');

    try {
        // Loading state
        loading.classList.remove("hidden");

        await emailjs.sendForm(
            "service_rqm9bwq", 
            "template_xuizs8p",
            event.target, 
            "-kBOZkcSo6PIMZ9mi"
        );

        // Success state
        form.reset();
        loading.classList.add("hidden");
        body.classList.add("success-open");
        setTimeout(() => {
            body.classList.remove("success-open");
        }, 5000)
    }
    catch {
        loading.classList.add("hidden");
        alert(
            "An error has occurred. Please try again later or contact me at ravenivan1@gmaill.com."
        );
    }
    

}