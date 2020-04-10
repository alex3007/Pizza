import React from 'react';

let store = {

    _state: {

        productBoxOne: [
                {id: 1, name: "Пицца", description: "Маргарита, Везувий, Чили"},
                {id: 2, name: "Хлеб", description: "Бородинский, Белый, Столичный"},
                {id: 3, name: "Огурцы", description: "Свежие, Маринованные"},
                {id: 4, name: "Рыба", description: "Хек, Минтай, Скумбрия"}
                            ],

        productBoxTwo: [
                {id: 1, name: "Чай", description: "Черный, Зеленый, Травяной"},
                {id: 2, name: "Сок", description: "Апельсиновый, Яблочный, Морковный"},
                {id: 3, name: "Вода", description: "Негазированная, Газированная"},
                {id: 4, name: "Кофе", description: "Американо, Черный"}
            ],

        productBoxThree: [
            {id: 1,name: "Тарелки", description: "Для всех видов блюд"},
            {id: 2, name: "Салфетки", description: "Широкий ассортимент цветов и размеров"},
            {id: 3, name: "Вилки", description: "Сталь, Серебро" },
            {id: 4, name: "Кружки", description: "Хрусталь, Фарфор"}
            ]

    },

    getState() {
        return this._state;
    }
};

export default store;