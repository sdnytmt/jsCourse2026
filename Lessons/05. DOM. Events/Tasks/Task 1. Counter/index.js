const setCounter = () => {
    const button = document.createElement('button');

    let count = 0;
    button.textContent = `Количество нажатий: ${count}`;
    button.classList.add('btn');

    document.querySelector('.main').append(button); 

    button.addEventListener('click', () => {
        count++;
        button.textContent = `Количество нажатий: ${count}`;

        if(count >= 3){
            button.classList.add('btn-wrn');
        }
    });

};
export default setCounter;