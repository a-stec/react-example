import { el, setChildren } from 'redom';
import validator from 'validator';
import logo from './img/logo.svg';
import './style.css';

(() => {
    function createFormField(id: string, name: string): HTMLLabelElement {
        const label: HTMLLabelElement = el('label');
        const input: HTMLInputElement = el('input');
        label.htmlFor = id;
        label.classList.add('label');
        input.id = id;
        input.name = id;
        input.classList.add('input');
        setChildren(label, [el('span', name), input]);
        return label;
    }

    function isValidForm(inputs: any[]): boolean {
        for(let item of inputs) {
            switch (item.name) {
                case 'email':
                    if (!validator.isEmail(item.value)) {
                        console.log('EMAIL');
                        return false;
                    }
                    break;
                case 'phone':
                    if (!validator.isMobilePhone(item.value, 'ru-RU')) {
                        console.log('PHONE');
                        return false;
                    }
                    break;
                default:
                    if (item.value === '') {
                        console.log('NAME');
                        return false;
                    }
            }
        }
        return true;
    }
    
    const popup: HTMLElement = el('div');
    const h1: HTMLHeadingElement = el('h1', 'Обратный звонок');
    const form: HTMLFormElement = el('form');
    
    const arr: HTMLLabelElement[] = [
        createFormField('name', "Имя"),
        createFormField('email', "Email"),
        createFormField('phone', "Телефон"),
    ];
    
    const name: HTMLCollection = arr[0].children;
    const email: HTMLCollection = arr[1].children;
    const phone: HTMLCollection = arr[2].children;
    const button = el('button', 'Отправить');
    
    form.classList.add('form');
    popup.classList.add('popup');
    h1.classList.add('h1');
    button.type = 'submit';
    button.classList.add('button');
    setChildren(form, [...arr, button]);
    setChildren(popup, [el('img', {class: 'logo', src: logo}), h1, form]);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (isValidForm([name, email, phone])) {
            alert("Ваш заявка принята!");
        } else {
            alert("Заполните верно все поля!");
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.add('body');
        setChildren(document.body, [popup]);
        // console.log(name);
    });
})();
