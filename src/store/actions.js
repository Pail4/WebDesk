export const MODAL_VISIBLE = 'MODAL_VISIBLE';
export const SETTINGS_MODE = 'SETTINGS_MODE';
export const BLOCK = 'BLOCK_POSITION';

export const changeBlock = (block) => {
    return {
        type: BLOCK,
        block: block
    };
};

export const changeModalVisible = (isModalVisible) => {
    return {
        type: MODAL_VISIBLE,
        modalVisible: isModalVisible
    };
};

export const settingsModeHandler = (isSettingsMode) => {
    return {
        type: SETTINGS_MODE,
        settingsMode: isSettingsMode
    };
};
