const LIGHTS = {
    red: {
        type: 'red',
        text: 'Красный',
    },
    yellow: {
        type: 'yellow',
        text: 'Желтый',
    },
    green: {
        type: 'green',
        text: 'Зеленый',
    },
};

const resetLights = (spans) => {
    spans.forEach(span => span.className = '');
};

const setLight = (spans, type) => {
    resetLights(spans);

    if (type === 'red') spans[0].className = 'red-light';
    if (type === 'yellow') spans[1].className = 'yellow-light';
    if (type === 'green') spans[2].className = 'green-light';
};

const setTrafficLight = () => {
    const lights = document.querySelector('.traffic__lights');
    const selectContainer = document.querySelector('.traffic__lights-select');

    const container = document.createElement('div');
    container.className = 'traffic__lights-container';

    const spans = [];
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        container.appendChild(span);
        spans.push(span);
    }

    lights.appendChild(container);

    const select = document.createElement('select');
    select.className = 'form-select';

    const options = [
        { value: 'red', text: 'Красный' },
        { value: 'yellow', text: 'Желтый' },
        { value: 'green', text: 'Зеленый' },
    ];

    for (const opt of options) {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.text;
        select.appendChild(option);
    }

    selectContainer.appendChild(select);

    setLight(spans, 'red');

    select.addEventListener('change', (e) => {
        setLight(spans, e.target.value);
    });
};

export default setTrafficLight;