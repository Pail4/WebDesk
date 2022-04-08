import { coordsToGrid } from '../../helpers';

export const Block = (props) => {
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
