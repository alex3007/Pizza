import React from 'react';
import cls from './Switcher.module.css';

const Swither = () => {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">Left</button>
            <button type="button" className="btn btn-secondary">Middle</button>
            <button type="button" className="btn btn-secondary">Right</button>
        </div>
    );
}

export default Swither;
