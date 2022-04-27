import { React } from 'react';
import { useDispatch } from 'react-redux';
import { changeModalVisible } from '../../store/slice';

export const EditorCancel = () => {
    const dispatch = useDispatch();
    return (
        <button className="editor-cancel"
            onClick={() => {
                dispatch(changeModalVisible(false));
            }}>
            <img src="src/img/cancel-block-icon.svg" alt="cancel"/>
        </button>
    );
};
