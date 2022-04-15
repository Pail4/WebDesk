import { combineReducers } from 'redux';
import { defaultStore } from './store';
import { CHANGE_BLOCK, LAST_BLOCK, MODAL_VISIBLE, SETTINGS_MODE } from './actions';

/*eslint-disable */

export const lastBlock = (state = defaultStore.lastBlock, action) => {
    switch (action.type) {
        case LAST_BLOCK:
            return Object.assign({}, state, action.lastBlock)
        default:
            return state;
    }
};

export const blocks = (state = defaultStore.blocks, action) => {
    switch (action.type) {
        case CHANGE_BLOCK: {
            const newBlock = action.payload;
            console.log(newBlock);
            const newBlocks = state.slice();
            return newBlocks.map((block) => {
                if (block.id === newBlock.id) return newBlock;
                return block;
            })};
        default:
            return state;
    }
}

export const modalVisible = (state = defaultStore.modalVisible, action) => {
    switch (action.type) {
        case MODAL_VISIBLE:
            return action.modalVisible;
        default:
            return state;
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
    settingsMode,
    lastBlock
})

/* eslint-enable */
