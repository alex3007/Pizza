import React from 'react';
import cls from './Switcher.module.css';
import {NavLink} from "react-router-dom";
const Switcher = (props) => {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <div className={cls.btnGroup}>
                <NavLink to={props.path.food}>
                    <button className="btn btn-secondary">Еда</button>
                </NavLink>
                <NavLink to={props.path.drinks}>
                    <button className="btn btn-secondary">Напитки</button>
                </NavLink>
                <NavLink to={props.path.dishes}>
                    <button className="btn btn-secondary">Посуда</button>
                </NavLink>
            </div>
        </div>
    );
}

export default Switcher;
