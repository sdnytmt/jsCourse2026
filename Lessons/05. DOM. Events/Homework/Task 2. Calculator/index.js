const TYPES = {
    DIGIT: 'digit',
    PLUS: 'plus',
    RESULT: 'result',
    RESET: 'reset',
};

const ADDITIONAL_BUTTONS = [
    {
        text: '+',
        type: TYPES.PLUS,
    },
    {
        text: '=',
        type: TYPES.RESULT,
    },
    {
        text: 'Сбросить',
        type: TYPES.RESET,
    },
];

const setCalculator = () => {

    const createButton = (data = '', curType, value = data) => {
        const perButton = document.createElement('button');
        perButton.classList.add(`btn`, `btn-dark`);
        data = String(data);
        perButton.dataset.type = curType;
        perButton.dataset.value = value;

        perButton.textContent = data;
        return perButton;
    }

    for(let num = 0; num <= 9; num++){
        let but = createButton(num, TYPES.DIGIT );
        document.querySelector('.calc__buttons').append(but);
    }

    for(let but of ADDITIONAL_BUTTONS){
        let perBut = createButton(but.text, but.type)
        document.querySelector('.calc__buttons').append(perBut);
    }

    const textSpan = document.createElement('span');
    textSpan.textContent = 'Результат: ';
    document.querySelector('.calc__result').append(textSpan);

    const numSpan = document.createElement('span');
    numSpan.textContent = '0';
    numSpan.classList.add(`calc__result-number`);
    document.querySelector('.calc__result').append(numSpan);

    const buttonsArea = document.querySelector('.calc__buttons');
    const calcMain = document.querySelector('.calc__main');

    buttonsArea.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn')) return;

        const { type, value } = e.target.dataset;

        if (type === TYPES.DIGIT || type === TYPES.PLUS) {
            calcMain.textContent += value;
        }

        if (type === TYPES.RESET) {
            calcMain.textContent = '';
            numSpan.textContent = '0';
        }

        if (type === TYPES.RESULT) {
            const expression = calcMain.textContent;
            if (!expression) return;

            const sum = expression
                .split('+')
                .filter(part => part !== '')
                .reduce((acc, part) => acc + Number(part), 0);

            numSpan.textContent = sum;
        }
    });
};

export default setCalculator;