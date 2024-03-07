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

    if (rs.getPropertyValue('--primary') === '#1d1d1e') {
        root.style.setProperty('--primary', "white");
        root.style.setProperty('--secondary', "#1d1d1e");
        root.style.setProperty('--nav-bar', "#313331");
        root.style.setProperty('--project', "#313331");

    } else {
        root.style.setProperty('--primary', "#1d1d1e");
        root.style.setProperty('--secondary', "white");
        root.style.setProperty('--nav-bar', "white");
        root.style.setProperty('--project', "white");
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