const createButton = () => {
    const button = document.createElement('button');

    button.classList.add('btn', 'btn-primary')
    button.textContent = 'Кнопка';

    document.querySelector('.button-container').append(button); 

    button.addEventListener('click', () => {
        const text = document.createElement('span');
        text.textContent = 'Текст вставлен!';

        document.querySelector('.description').append(text); 
    })

};

export default createButton;
