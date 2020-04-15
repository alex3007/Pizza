import React from 'react';

let store = {

    _state: {

        foodItems: [
            {id: 1, name: "Пицца", description: "Маргарита, Везувий, Чили"},
            {id: 2, name: "Мороженое", description: "Пломбир, Каштан"},
            {id: 3, name: "Йогурт", description: "Савушкин продукт, Danone"},
            {id: 4, name: "Булочки", description: "Домашняя, Снежинка, Ромовая Баба"}
        ],

        drinksItems: [
            {id: 1, name: "Чай", description: "Черный, Зеленый, Травяной"},
            {id: 2, name: "Кофе", description: "Американо, Черный"},
            {id: 3, name: "Вода", description: "Негазированная, Газированная"},
            {id: 4, name: "Сок", description: "Апельсиновый, Яблочный, Мультифрукт"},
        ],

        dishesItems: [
            {id: 1, name: "Тарелки", description: "Для всех видов блюд"},
            {id: 2, name: "Кружки", description: "Хрусталь, Фарфор"},
            {id: 3, name: "Вилки", description: "Сталь, Серебро"},
            {id: 4, name: "Ложки", description: "Сталь, Серебро"}
        ],
        path: {
            food: '/food',
            drinks: '/drinks',
            dishes: '/dishes'
        }
    },

    getState() {
        return this._state;
    }
};
export default store;