export const MODAL_VISIBLE = 'MODAL_VISIBLE';
export const SETTINGS_MODE = 'SETTINGS_MODE';

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
