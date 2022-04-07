export const Block = (props) => {
    const { name, position, design } = props.state;
    const { image, displayImage, color } = design.background;
    const styles = {
        background: `center / contain url(${image}) no-repeat `.repeat(displayImage) + color,
        gridColumn: position[0],
        gridRow: position[1]
    };
    return (
        <div className="label-block" style={styles}>
            <a href="">{name.repeat(design.name.displayName)}</a>
        </div>
    );
};
