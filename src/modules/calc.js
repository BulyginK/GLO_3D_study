const calc = () => {
    const calcInput = document.querySelectorAll('#calc input');
    const form = document.querySelectorAll('[name="user_form"]');
    // const userName = document.querySelectorAll('[name="user_name"]');
    // const formEmail = document.querySelectorAll('[name="user_email"]');
    // const userPhone = document.querySelectorAll('[name="user_phone"]');
    // const userMessage = document.querySelectorAll('[name="user_message"]');

    for (let i = 0; i < calcInput.length; i++) {
        calcInput[i].addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "")
        });
    };

    for (let i = 0; i < form.length; i++) {
        form[i].addEventListener('submit', (e) => {
            const userName = form[i].querySelector('.form-name');
            const formEmail = form[i].querySelector('.form-email');
            const userPhone = form[i].querySelector('.form-phone');
            const userMessage = form[i].querySelector('.mess');
            e.preventDefault()

            if (!/^[А-Яа-я]+$/i.test(userName.value)) { alert('+') }
            if (formEmail.value) { }
            if (userPhone.value) { }
            if (userMessage.value) { }
        })
    };




}

export default calc