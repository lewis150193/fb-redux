import { combineReducers } from 'redux'
import {
    RECEIVE_THREAD,
    TOGGLE_MESSAGE_DETAIL,
    RECEIVE_MESSAGE,
    RECEIVE_CONVERSATION
} from '../actions'

export function uiReducer(state = { isMessageDetailOpen: false }, action) {
    switch (action.type) {
        case TOGGLE_MESSAGE_DETAIL:
            return {isMessageDetailOpen: !state.isMessageDetailOpen};
        default:
            return state
    }
}

export function threadReducer(state = null, action) {
    switch (action.type) {
        case RECEIVE_THREAD:
            return action.thread;
        default:
            return state;
    }
}

export function conversationReducer(state = [], action) {
    switch (action.type) {
        case RECEIVE_CONVERSATION:
            return [...state, ...action.payload];
        case RECEIVE_MESSAGE:
            return [...state, action.message];
        default:
            return [];
    }
}

export default combineReducers({
    ui: uiReducer,
    thread: threadReducer,
    conversation: conversationReducer
    // combineReducers can combine as many reducers as you need
});
