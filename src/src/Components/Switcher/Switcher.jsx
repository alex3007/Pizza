import React from 'react';
import cls from './Switcher.module.css';
import {NavLink} from "react-router-dom";

const Swither = (props) => {



    return (
        <div className="btn-group" role="group" aria-label="Basic example">
        <div className={cls.btnGroup}>
            <NavLink to="/food" ><button  className="btn btn-secondary">Еда </button></NavLink>
            <NavLink to="/drinks" ><button  className="btn btn-secondary">Напитки</button></NavLink>
            <NavLink to="/dishes" ><button  className="btn btn-secondary">Посуда</button></NavLink>
        </div>
        </div>
    );
}

export default Swither;
