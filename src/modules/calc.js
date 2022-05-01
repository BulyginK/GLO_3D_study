const calc = (price = 100) => {
    const calcInput = document.querySelectorAll('#calc input');

    for (let i = 0; i < calcInput.length; i++) {
        calcInput[i].addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "")
        });
    };

    console.log(price);
}

export default calc