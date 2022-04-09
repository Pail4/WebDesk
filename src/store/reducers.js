import { combineReducers } from 'redux';
import { defaultStore } from './store';
import { MODAL_VISIBLE, SETTINGS_MODE } from './actions';

/*eslint-disable */

export const modalVisible = (state = defaultStore.modalVisible, action) => {
    switch (action.type) {
        case MODAL_VISIBLE:
            return action.modalVisible;
        default:
            return state
    }
};

export const settingsMode = (state = defaultStore.settingsMode, action) => {
    switch (action.type) {
        case SETTINGS_MODE:
            return action.settingsMode;
        default:
            return state;
    }
};

/* eslint-enable */
