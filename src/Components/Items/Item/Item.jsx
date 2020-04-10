import React from 'react';
import cls from './Item.module.css';
import productOne from '../../../Assets/Images/productOne.jpg';

const Item = (props) => {
    let name = props.name;
    return (
          <div className={cls.card} >
                <img src={productOne} className="card-img-top" alt="product"/>
                <p>{name}</p>

              <div className={cls.describe}>
                  <hr/>
                    <div className="card-body">

                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                    </div>
              </div>
          </div>
    );
}

export default Item;
