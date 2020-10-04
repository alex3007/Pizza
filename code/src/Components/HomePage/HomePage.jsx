import React from 'react';
import cls from './HomePage.module.css';
import carouselImgOne from './../../Assets/Images/slide1.jpg';
import carouselImgTwo from './../../Assets/Images/slide2.jpg';
import {NavLink} from "react-router-dom";


const HomePage = () => {


    return (

        <div className={cls.container}>
            <div className={cls.wellcomeImage}>
                <h1>GetPizza</h1>
                <p>Закажите лучшую пиццу в мире!</p>
                <NavLink to={'/contacts'} className={cls.button}>Хочу!</NavLink>
            </div>
        </div>
    )
};

export default HomePage;