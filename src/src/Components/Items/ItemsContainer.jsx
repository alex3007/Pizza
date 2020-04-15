import React from 'react';
import Items from './Items';

const ItemsContainer = (props) => {
    let productItems;

    if (props.path === props.state.path.food) {

        productItems = props.state.foodItems}

    else if (props.path === props.state.path.drinks) {

        productItems = props.state.drinksItems}

    else if (props.path === props.state.path.dishes) {

        productItems = props.state.dishesItems
    }
    else {productItems = props.state.foodItems}
    return (
        <div>
            <Items productItems={productItems}  />
        </div>
    );
}
export default ItemsContainer;


