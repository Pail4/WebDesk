import { defaultStore } from '../store/store';

import { coordsToGrid } from '../helpers';

export const BlockList = () => {
    return (
        <div className='blocks'>
            <Block
                state = {defaultStore.blocks[0]}
            />
            <Block
                state = {defaultStore.blocks[1]}
            />
            <Block
                state = {defaultStore.blocks[2]}
            />
            <Block
                state = {defaultStore.blocks[3]}
            />
        </div>
    );
};

const Block = (props) => {
    const { name, coords, link, design } = props.state;
    const { image, displayImage, color } = design.background;

    const { gridColumn, gridRow } = coordsToGrid(coords);
    const styles = {
        background: `center / contain url(${image}) no-repeat `.repeat(displayImage) + color,
        gridColumn,
        gridRow
    };
    return (
        <a href={link} target="_blank" className="label-block" style={styles} >
            <p>{name.repeat(design.name.displayName)}</p>
        </a>
    );
};
