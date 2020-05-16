import React from 'react';
import cls from './ContactPage.module.css';

const ContactPage = (props) => {

    return (
        <div className={cls.contactsBlock}>
            <h4>Контакты</h4>
            <hr/>
            <ul className={cls.contacts}>
                <li><b>Телефон:</b> +375(33)332-56-03</li>
                <li><b>Почта:</b> info@pizza.by</li>
                <li><b>Адрес:</b> г. Минск, ул. Коржа,3 </li>
            </ul>
        </div>
    )
};

export default ContactPage;