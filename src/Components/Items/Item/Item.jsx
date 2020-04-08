import React from 'react';
import cls from './Item.module.css';
import productOne from '../../../Assets/Images/productOne.jpg';

const Item = () => {
    return (
            <div className={cls.card} >
                <img src={productOne} className="card-img-top" alt="product"/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                    </div>
            </div>
    );
}

export default Item;
