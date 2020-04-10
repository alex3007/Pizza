import React from 'react';

let store = {

    _state: {

        productBoxOne: [
                {id: 1, name: "Пицца", description: "Маргарита, Везувий, Чили"},
                {id: 2, name: "Мороженое", description: "Пломбир, Каштан"},
                {id: 3, name: "Йогурт", description: "Савушкин продукт, Danone"},
                {id: 4, name: "Булочки", description: "Домашние, Снежинка, Ромовая Баба"}
                            ],

        productBoxTwo: [
                {id: 1, name: "Чай", description: "Черный, Зеленый, Травяной"},
                {id: 2, name: "Кофе", description: "Американо, Черный"},
                {id: 3, name: "Вода", description: "Негазированная, Газированная"},
                {id: 4, name: "Сок", description: "Апельсиновый, Яблочный, Мультифрукт"},
            ],

        productBoxThree: [
            {id: 1,name: "Тарелки", description: "Для всех видов блюд"},
            {id: 2, name: "Кружки", description: "Хрусталь, Фарфор"},
            {id: 3, name: "Вилки", description: "Сталь, Серебро" },
            {id: 4, name: "Ложки", description: "Сталь, Серебро"}
            ]

    },

    getState() {
        return this._state;
    }
};

export default store;