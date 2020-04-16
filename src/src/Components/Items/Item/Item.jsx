import React from 'react';
import cls from './Item.module.css';

const Item = (props) => {
    let name = props.name;
    let description = props.description;
    let image = props.image;
    return (
        <div className={cls.card}>
            <img src={props.image} className="card-img-top" alt="product"/>
            <p>{name}</p>
            <div className={cls.describe}>
                <hr className={cls.line} />
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;
