import React from 'react';
import cls from './Items.module.css';
import Item from './Item/Item';

const Items = (props) => {
    let productItem;

       if (props.path === '/food'){

                productItem = props.store.getState().productBoxOne.map( name => <Item name={name.name} description={name.description} />)}

        else if (props.path === '/drinks'){

               productItem = props.store.getState().productBoxTwo.map( name => <Item name={name.name} description={name.description} />)}

          else {

               productItem =props.store.getState().productBoxThree.map( name => <Item name={name.name} description={name.description} />)};


    return (
        <div className={cls.itemContainer}>
            {productItem}
        </div>
    );
}
export default Items;


