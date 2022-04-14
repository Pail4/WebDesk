import { combineReducers } from 'redux';
import { defaultStore } from './store';
import { BLOCK, MODAL_VISIBLE, SETTINGS_MODE } from './actions';

/*eslint-disable */

export const blocks = (state = defaultStore.blocks, action) => {
    switch (action.type) {
        case BLOCK: {
                const newBlock = action.block;
                const newBlocks = state.slice();
                newBlocks.filter((block) => {
                    if (block.id === newBlock.id) return newBlock;
                    return block;
                })
                return newBlocks;
            }
        default:
            return state
    }
}

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

export const reducers = combineReducers({
    blocks,
    modalVisible,
    settingsMode
})

/* eslint-enable */
