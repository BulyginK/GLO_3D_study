const calc = (price = 100) => {
    const calcInput = document.querySelectorAll('#calc input');

    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');


    for (let i = 0; i < calcInput.length; i++) {
        calcInput[i].addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "")
        });
    };

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
            // runTotalValue(totalValue);
        } else {
            totalValue = 0;
        }

        showResult()
    }

    // const runTotalValue = (totalValue) => {
    //     let t = 1000 / totalValue;
    //     console.log(t);
    //     let n = 0;
    //     let interval = setInterval(() => {
    //         n = n + 10;
    //         if (n > totalValue) {
    //             clearInterval(interval);
    //             showResult()
    //             return
    //         }
    //         total.innerHTML = n;
    //     }, t);
    // }

    const showResult = () => {
        total.innerHTML = totalValue;
    }

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
            countCalc();
        }
    });
}

export default calc