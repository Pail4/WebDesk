import { useDispatch, useSelector } from 'react-redux';
import { changeBlock, changeModalVisible } from '../../store/actions';

export const EditorSave = () => {
    const dispatch = useDispatch();
    const { name, link, displayName, fontColor, displayImage, image, background } = useSelector(state => state.lastBlock);

    return (
        <button type='submit' className="editor-save"
            onClick={() => {
                dispatch(changeModalVisible(false));
                dispatch(changeBlock({
                    name: name,
                    link: link,
                    design: {
                        name: {
                            displayName: displayName,
                            fontColor: fontColor
                        },
                        background: {
                            displayImage: displayImage,
                            image: image,
                            color: background
                        }
                    }
                }));
            }}>
            <img src="src/img/save-block-icon.svg" alt="save"/>
        </button>
    );
};
