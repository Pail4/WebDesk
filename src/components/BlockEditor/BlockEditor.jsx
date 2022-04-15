import './block-editor.css';
import { React } from 'react';
import { EditorCancel } from './EditorCancel';
import { EditorSave } from './EditorSave';
import { useDispatch, useSelector } from 'react-redux';
import { changeLastBlock } from '../../store/actions';

export const BlockEditor = () => {
    const dispatch = useDispatch();
    const { modalVisible, lastBlock } = useSelector(state => state);

    if (!modalVisible) return null;

    return (
        <form className="editor" action=''
            onSubmit={(e) => {
                e.preventDefault();
                e.target.reset();
            }}>
            <div className="editor-actions">
                <EditorSave />
                <EditorCancel />
            </div>
            <div className="editor-field">
                <h3 className="editor-field__title">Link</h3>
                <div className="editor-field__content">
                    <input type="text" className="editor-field__type" placeholder="write link to the site here"
                        onChange={(e) => {
                            dispatch(changeLastBlock({ link: e.target.value }));
                        }} />
                </div>
            </div>
            <div className="editor-field">
                <h3 className="editor-field__title">Name</h3>
                <div className="editor-field__content">
                    <CustomCheckbox text="show name:"
                        onChange={(e) => {
                            dispatch(changeLastBlock({ displayName: true }));
                        }} />
                </div>
                <div className="editor-field__content">
                    <input type="text" className="editor-field__type" placeholder="write site name here"
                        onChange={(e) => {
                            dispatch(changeLastBlock({ name: e.target.value }));
                        }} />
                    <FieldColor
                        value={lastBlock.fontColor}
                        onChange={(e) => {
                            dispatch(changeLastBlock({ fontColor: e.target.value }));
                        }} />
                </div>
            </div>
            <div className="editor-field">
                <h3 className="editor-field__title">Background</h3>
                <div className="editor-field__content">
                    <CustomCheckbox
                        text="show site image:"
                        onChange={(e) => {
                            dispatch(changeLastBlock({ displayImage: true }));
                        }} />
                    <FieldColor
                        value={lastBlock.background}
                        onChange={(e) => {
                            dispatch(changeLastBlock({ background: e.target.value }));
                        }} />
                </div>
            </div>
        </form>
    );
};

const FieldColor = ({ value, onChange }) => {
    return (
        <label className="custom-color">
            <span>Color:</span>
            <input type="color" className="editor-field__color" value={value}
                onChange={onChange} />
        </label>
    );
};

const CustomCheckbox = ({ text, onChange }) => {
    return (
        <label className="custom-checkbox">
            <input type="checkbox" value="1" onChange={onChange}/>
            <span>{text}</span>
        </label>
    );
};
