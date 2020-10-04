import React from 'react';
import cls from './ContactPage.module.css';
import carouselImgOne from "../../Assets/Images/slide1.jpg";
import carouselImgTwo from "../../Assets/Images/slide2.jpg";

const ContactPage = (props) => {

    return (
        <div>
            <div className={cls.contactsBlock}>
                <h4>Контакты</h4>
                <hr/>
                <ul className={cls.contacts}>
                    <li><b>Телефон:</b> +375(33)332-56-03</li>
                    <li><b>Почта:</b> info@pizza.by</li>
                    <li><b>Адрес:</b> г. Минск, ул. Коржа,3</li>
                </ul>
            </div>
            <div className={cls.carousel}>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className={cls.carouselImage} src={carouselImgOne} alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img className={cls.carouselImage} src={carouselImgTwo} alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ContactPage;