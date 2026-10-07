const setToDo = () => {

    const createButton = (text, customClass = '') => {
        const perButton = document.createElement('button');
        perButton.classList.add(`btn`, `btn-primary`);
        perButton.textContent = text;

        if (customClass){
            perButton.classList.add(customClass);
        }

        return perButton;

    }

    const createSpan = (text, dataType) => {
        const perSpan = document.createElement('span');
        perSpan.dataset.type = dataType;
        perSpan.textContent = text;

        return perSpan;

    }

    const createInputGroup = () => {
        const addGroup = document.createElement('div');
        addGroup.classList.add('add-group');
        document.querySelector('.to-do__main').append(addGroup); 

        const input = document.createElement('input');
        input.placeholder='Введите задачу';
        input.classList.add(`form-control`, `form-control-lg`);
        addGroup.append(input); 

        const plansButton = createButton('Добавить в планы', 'btn-danger')
        addGroup.append(plansButton);

        const doneButton = createButton('Добавить в сделанное', 'btn-success');
        addGroup.append(doneButton);

         return { addGroup, input };
    }

     const { addGroup, input } = createInputGroup();

     const appContainer = document.querySelector('.to-do');


    appContainer.addEventListener('click', (e) => {

            if (e.target.classList.contains('btn-danger') || e.target.classList.contains('btn-success')) {
                const text = input.value;

                let span;

                if (!text.trim()) return; 

                if (e.target.classList.contains('btn-danger')) {
                    span = createSpan(text, 'planned');
                } else {
                    span = createSpan(text, 'completed');
                }

                document.querySelector('.to-do__tasks').append(span);

                input.value = ''; 
        }

        if (e.target.dataset.type){
             e.target.remove();
        };
    });
};

export default setToDo;