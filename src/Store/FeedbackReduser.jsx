import React from 'react';

const FeedbackReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newId = state.length + 1;
            let newMessage = {
                id: newId,
                message: state.newMessageText,
            };
            state.push(newMessage);
            state.newMessageText = '';
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT' :
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});
export const updateNewMessageActionCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});

export default FeedbackReducer;
