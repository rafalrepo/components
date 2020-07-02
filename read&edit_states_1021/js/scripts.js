
class Modal{
    constructor(){


        this.UI_Selectors = {
            output: '[data-output]',
            edit: '[data-edit]',
            close: '[data-cancel]',
            save: '[data-save]',
            fields: '[name=fields]',
            modal: '[data-modal]',
        }
    }


    init(){
        const output = document.querySelectorAll(`${this.UI_Selectors.output}`);
        const edit = document.querySelector(`${this.UI_Selectors.edit}`);
        const close = document.querySelectorAll(`${this.UI_Selectors.close}`);
        const save = document.querySelector(`${this.UI_Selectors.save}`);
        const fields = document.querySelectorAll(`${this.UI_Selectors.fields}`);
        const modal = document.querySelector(`${this.UI_Selectors.modal}`);

        save.addEventListener('click', (e) => {
            e.preventDefault();
            this.sendForm(output, fields)
        })

        edit.addEventListener('click', (e)=>{
            e.preventDefault();
            modal.classList.remove('hidden')
        })

        close.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('hidden')
            })
        })

    }

    sendForm(output, fields){
        fields.forEach((element, index) => {
            output.forEach((element2, index2) => {
                if(index === index2)
                    element2.innerHTML = `${element.value}`;
            });
        });
    }
}