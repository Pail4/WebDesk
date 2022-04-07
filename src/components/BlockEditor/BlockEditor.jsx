import './block-editor.css';
import { EditorCancel } from './EditorCancel';
import { EditorSave } from './EditorSave';

export const BlockEditor = () => {
    return (
        <div className="editor">
            <div className="editor-actions">
                <EditorSave/>
                <EditorCancel/>
            </div>
            <div className="editor-field">
                <h3 className="editor-field__title">Link</h3>
                <div className="editor-field__content">
                    <input type="text" className="editor-field__type" placeholder="write link to the site here"/>
                </div>
            </div>
            <div className="editor-field">
                <h3 className="editor-field__title">Name</h3>
                <div className="editor-field__content">
                    <input type="text" className="editor-field__type" placeholder="write site name here"/>
                    <label className="custom-color">
                        <span>&nbsp;</span>
                        <input type="color" className="editor-field__color" value="#C4C4C4" />
                    </label>
                </div>
            </div>
            <div className="editor-field">
                <h3 className="editor-field__title">Background</h3>
                <div className="editor-field__content">
                    <label className="custom-checkbox">
                        <input type="checkbox" value="1"/>
                        <span>Use site image:</span>
                    </label>
                    <label className="custom-color">
                        <span>Color:</span>
                        <input type="color" className="editor-field__color" value="#C4C4C4" />
                    </label>
                </div>
            </div>
        </div>
    );
};
