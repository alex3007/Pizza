import React from 'react';
import cls from './Switcher.module.css';

const Swither = () => {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
        <div className={cls.btnGroup}>
            <button type="button" className="btn btn-secondary">Еда</button>
            <button type="button" className="btn btn-secondary">Напитки</button>
            <button type="button" className="btn btn-secondary">Товары</button>
        </div>
        </div>
    );
}

export default Swither;
