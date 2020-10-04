import React from 'react';
import cls from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={cls.header}>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand mr-5 " href="#">GetPizza</a>
                <button className="navbar-toggler"
                        type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <div className={cls.navBar}>
                        <ul className="navbar-nav mt-10 mt-lg-0">
                            <li className={cls.navItem}>
                                <NavLink className={cls.navLink}
                                         activeClassName={cls.active}
                                         to={props.path.home}>Главная</NavLink>
                            </li>
                            <li className={cls.navItem}>
                                <NavLink className={cls.navLink}
                                         activeClassName={cls.active}
                                         to={props.path.feedbacks}>Отзывы</NavLink>
                            </li>
                            <li className={cls.navItem}>
                                <NavLink className={cls.navLink}
                                         activeClassName={cls.active}
                                         to={props.path.contacts}>Контакты</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
