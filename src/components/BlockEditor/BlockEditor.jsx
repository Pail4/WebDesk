import './block-editor.css';
import { EditorCancel } from './EditorCancel';
import { EditorSave } from './EditorSave';
import { useSelector } from 'react-redux';

export const BlockEditor = () => {
    const { modalVisible } = useSelector(state => state);

    if (!modalVisible) return null;

    return (
        <div className="editor">
            <div className="editor-actions">
                <EditorSave />
                <EditorCancel />
            </div>
            <div className="editor-field">
                <h3 className="editor-field__title">Link</h3>
                <div className="editor-field__content">
                    <input type="text" className="editor-field__type" placeholder="write link to the site here" />
                </div>
            </div>
            <div className="editor-field">
                <h3 className="editor-field__title">Name</h3>
                <div className="editor-field__content">
                    <CustomCheckbox text="show name:" />
                </div>
                <div className="editor-field__content">
                    <input type="text" className="editor-field__type" placeholder="write site name here" />
                    <FieldColor />
                </div>
            </div>
            <div className="editor-field">
                <h3 className="editor-field__title">Background</h3>
                <div className="editor-field__content">
                    <CustomCheckbox text="show site image:" />
                    <FieldColor />
                </div>
            </div>
        </div>
    );
};

const FieldColor = () => {
    return (
        <label className="custom-color">
            <span>Color:</span>
            <input type="color" className="editor-field__color" value="#C4C4C4" />
        </label>
    );
};

const CustomCheckbox = (props) => {
    return (
        <label className="custom-checkbox">
            <input type="checkbox" value="1" />
            <span>{props.text}</span>
        </label>
    );
};
