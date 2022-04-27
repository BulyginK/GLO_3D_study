const validate = () => {
    const userName = document.querySelectorAll('[name="user_name"]');
    const formEmail = document.querySelectorAll('[name="user_email"]');
    const userPhone = document.querySelectorAll('[name="user_phone"]');
    const userMessage = document.querySelectorAll('[name="user_message"]');

    for (let i = 0; i < userName.length; i++) {
        userName[i].addEventListener('input', (e) => {
            if (!(/^[а-яА-Я\s-]+$/g.test(e.target.value))) {
                e.target.value = e.target.value.replace(/.$/, "")
            }
        });
    };

    for (let i = 0; i < formEmail.length; i++) {
        formEmail[i].addEventListener('input', (e) => {
            if (!(/^[-\w\d_\.\!~\*\'\@]+$/gi.test(e.target.value))) {
                e.target.value = e.target.value.replace(/.$/, "")
            }
        });
    };

    for (let i = 0; i < userPhone.length; i++) {
        userPhone[i].addEventListener('input', (e) => {
            if (!(/^[\d)(-]+$/g.test(e.target.value))) {
                e.target.value = e.target.value.replace(/.$/, "")
            }
        });
    };

    for (let i = 0; i < userMessage.length; i++) {
        userMessage[i].addEventListener('input', (e) => {
            if (!(/^[а-яА-Я\s-]+$/g.test(e.target.value))) {
                e.target.value = e.target.value.replace(/.$/, "")
            }
        });
    };
}

export default validate