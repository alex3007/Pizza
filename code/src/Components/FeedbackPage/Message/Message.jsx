import React from 'react';
import cls from './Message.module.css'

const Message = (props) => {

    let userId = props.id;
    let messageText = props.message;
    return (
        <div className={cls.message}>
            <p><b className={cls.title}>Отзыв {userId}:</b> <i>{messageText}</i></p>
        </div>
    )
};
export default Message;