const validate = () => {
    const userName = document.querySelectorAll('[name="user_name"]');
    const formEmail = document.querySelectorAll('[name="user_email"]');
    const userPhone = document.querySelectorAll('[name="user_phone"]');
    const userMessage = document.querySelectorAll('[name="user_message"]');

    for (let i = 0; i < userName.length; i++) {
        userName[i].addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\s-]/, "");
        });
    };

    for (let i = 0; i < formEmail.length; i++) {
        formEmail[i].addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^-\w\d_\.\!~\*\'@]/i, "");
        });
    };

    for (let i = 0; i < userPhone.length; i++) {
        userPhone[i].addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d\+)(-]/, "");
        });
    };

    for (let i = 0; i < userMessage.length; i++) {
        userMessage[i].addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\s-]/, "");
        });
    };
}

export default validate