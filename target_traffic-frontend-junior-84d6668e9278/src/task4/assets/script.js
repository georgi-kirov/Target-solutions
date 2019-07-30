var validation = (function() {

    function validateName(name) {
        console.log(name)
        if (name !== "" || name.length > 1) {
            $('#name-error-msg').addClass('hidden');
            return true;
        }

        $('#name-error-msg').removeClass('hidden');
        return false;
    }

    function validateEmail(email) {
        // let emailValue = $('#email').val();

        if (email !== '') {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                $('#email-error-msg').addClass("hidden");
                return true;
            }
    
            $('#email-error-msg').removeClass("hidden");
            return false;
        }
    }

    function validateMessage(message) {
        if (message.length > 10) {
            $('#message-error-msg').addClass('hidden');
            return true;
        }

        $('#message-error-msg').removeClass('hidden');
        return false;
    }

    function validate() {
        let name = document.getElementById('recipient-name').value
        let email = document.getElementById('recipient-email').value
        let message = document.getElementById('message-text').value
        // let test = document.getElementsByClassName('nav-item')
        validateName(name)
        validateEmail(email)
        validateMessage(message)
        
    }

    return {
        validate: validate
    }
})()
