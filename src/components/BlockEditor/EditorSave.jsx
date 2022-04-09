import { useDispatch } from 'react-redux';
import { changeModalVisible } from '../../store/actions';

export const EditorSave = () => {
    const dispatch = useDispatch();

    return (
        <button className="editor-save"
            onClick={() => dispatch(changeModalVisible(false))}>
            <img src="src/img/save-block-icon.svg" alt="save"/>
        </button>
    );
};
