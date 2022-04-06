export function checkResizability(newPosition, blocks) {
    blocks.forEach(block => {
        const a = newPosition;
        const b = block.coords;
        const isOccupied = !(a.y1 < b.y2 || a.y2 > b.y1 || a.x2 < b.x1 || a.x1 > b.x2);
        if (isOccupied) return false;
    });
    return true;
};

export function coordsToGrid(coords) {
    const gridColumn = coords.x1 + ' / ' + (coords.x2 + 1);
    const gridRow = coords.y1 + ' / ' + (coords.y2 + 1);
    const grid = {
        gridColumn,
        gridRow
    };
    return grid;
}
