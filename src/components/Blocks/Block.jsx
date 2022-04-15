import { coordsToGrid, resize, resizeStop, setResizeCursor } from '../../blocks';
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBlock, changeModalVisible } from '../../store/actions';

export const Block = (props) => {
    const blocks = useSelector(state => state.blocks);
    const settingsMode = useSelector(state => state.settingsMode);
    const dispatcher = useDispatch();
    const [isMouseDown, setIsMouseDown] = useState(false);

    const { id, name, coords, link, design } = props.state;
    const { image, displayImage, color } = design.background;

    const { gridColumn, gridRow } = coordsToGrid(coords);
    const styles = {
        background: `center / contain url(${image}) no-repeat `.repeat(displayImage) + color,
        gridColumn,
        gridRow
    };

    function mouseMoveListener(event) {
        if (!settingsMode) return;
        setResizeCursor(event);
        if (isMouseDown) {
            document.body.onselectstart = function() { return false; };
            const filtredBlocks = blocks.filter((item) => item.id !== id);
            const newPosition = resize(event, coords, filtredBlocks);
            if (newPosition) {
                const newBlock = Object.assign({}, props.state);
                newBlock.coords = newPosition;
                dispatcher(changeBlock(newBlock));
            }
            mouseUpListener(event);
        }
    }

    function mouseDownListener(event) {
        event.preventDefault();
        setIsMouseDown(true);
    }

    function mouseUpListener(event) {
        if (isMouseDown) {
            resizeStop(event);
            setIsMouseDown(false);
        }
    }

    return name === ''
        ? <AddBlock style={styles}/>
        : <div className="label-block"
            style={styles}
            onMouseMove={mouseMoveListener}
            onMouseDown={mouseDownListener}
            onMouseUp={mouseUpListener}>
            <EditButton />
            <a href={link} target="_blank" rel="noreferrer" onClick={(e) => {if (settingsMode) e.preventDefault();}}>
                <p>{name.repeat(design.name.displayName)}</p>
            </a>
        </div>;
};

const EditButton = () => {
    const dispatch = useDispatch();
    const settingsMode = useSelector(state => state.settingsMode);
    if (!settingsMode) return null;
    return (
        <button className="edit-block"
            onClick={() => {
                dispatch(changeModalVisible(true));
            }}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="50" rx="10" fill="black" fillOpacity="0.68"/>
                <path d="M47.1041 39.5625L28.1875 20.6458C30.125 15.7708 29.125 10.0209 25.1875 6.06252C20.3958 1.27086 12.9375 0.833355 7.62498 4.70835L15.625 12.7292L12.6666 15.6667L4.68748 7.68752C0.812481 12.9792 1.24998 20.4583 6.04165 25.2292C9.91665 29.1042 15.5625 30.125 20.3958 28.3125L39.375 47.2917C40.1875 48.1042 41.5 48.1042 42.3125 47.2917L47.1041 42.5C47.9375 41.7083 47.9375 40.3958 47.1041 39.5625ZM40.8541 42.8958L21.1458 23.1875C19.875 24.125 18.4583 24.6875 16.9791 24.8958C14.1458 25.3125 11.1666 24.4583 8.99998 22.2917C7.02081 20.3333 6.10415 17.7083 6.24998 15.125L12.6875 21.5625L21.5208 12.7292L15.0833 6.29169C17.6666 6.14585 20.2708 7.06252 22.25 9.02085C24.5 11.2709 25.3541 14.375 24.8333 17.2708C24.5833 18.75 23.9583 20.125 23 21.3542L42.6875 41.0417L40.8541 42.8958Z" fill="#DBEEF8"/>
            </svg>
        </button>
    );
};

const AddBlock = ({ style }) => {
    const dispatch = useDispatch();
    const { settingsMode } = useSelector(state => state);
    if (!settingsMode) return null;
    return (
        <button className="add-block" style={style}
            onClick={() => {
                dispatch(changeModalVisible(true));
            }}>
        </button>
    );
};
