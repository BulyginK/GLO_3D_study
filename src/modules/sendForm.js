const sendForm = () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(elem => {
        const idForms = elem.id;

        sendForms({
            formId: idForms,
            someElem: [
                {
                    type: 'block',
                    id: 'total'
                }
            ]
        })
    })
}

const sendForms = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);

    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется!';

    const validate = (list) => {
        let success = true;
        const userName = form.querySelector('[name="user_name"]');
        const userPhone = form.querySelector('[name="user_phone"]');
        const userMessage = form.querySelector('[name="user_message"]');
        console.log(/\S/.test(userName.value));
        console.log(/^[а-яА-Я\s]+$/.test(userName.value));
        console.log(/^[\d(\+)-]+$/.test(userPhone.value));
        if (/\S/.test(userName.value)) {
            console.log('1');
            if (/^[а-яА-Я\s]+$/.test(userName.value) && /^[\d(\+)-]+$/.test(userPhone.value)) {
                console.log('2');
                if (!userMessage == null && /^[а-яА-Я\s\d:;,\.!?"'-]+$/g.test(userMessage.value)) {
                    console.log('3');
                    return success
                }
            }
            return success
        } else {
            return success = false
        }
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        statusBlock.style.color = '#fff';
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;

                    formElements.forEach(input => {
                        input.value = '';
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                })
        } else {
            alert('Данные не валидны');
            statusBlock.textContent = errorText;
            formElements.forEach(input => {
                input.value = '';
            })
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожааалуйста))')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitForm();

            setTimeout(() => statusBlock.remove(), 2500);
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default sendForm