import { defaultStore } from '../store/store';

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
    const { name, position, design } = props.state;
    const { image, displayImage, color } = design.background;
    const styles = {
        background: `center / contain url(${image}) no-repeat `.repeat(displayImage) + color,
        gridColumn: position[0],
        gridRow: position[1]
    };
    return (
        <div className="label-block" style={styles}>
            <p>{name.repeat(design.name.displayName)}</p>
        </div>
    );
};
