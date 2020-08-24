window.onload = function(){

    const form = document.getElementById('contactForm');

    const firstName = document.getElementById('firstName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

     form.addEventListener('click', (event) => {
        const errorMessage = "Something went wrong, please try again";

        if (!form.checkValidity()) {
            event.preventDefault();

            !firstName.checkValidity() ? firstName.classList.add('form__error'): '';
            !email.checkValidity() ? email.classList.add('form__error'): '';
            !message.checkValidity() ? message.classList.add('form__error'): '';

            document.getElementById("contact__error").innerHTML = errorMessage;
        } else {
            // grecaptcha.ready(function() {
            //     grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'}).then(function(token) {
            //         console.log(token)
            //         // Add your logic to submit to your backend server here.
            //     });
            //   });
        }

    })

    // function onSubmit(token) {
    //     document.getElementById("demo-form").submit();
    //   }
 };

