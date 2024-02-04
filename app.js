function openMenu() {
    document.body.classList.add("open");
}

function closeMenu() {
    document.body.classList.remove("open");
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