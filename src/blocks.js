export function setResizeCursor(event) {
    const elem = event.target;
    const direction = findDirection(elem, event);

    const cursors = 'n w s e ne se sw nw'.split(' ');
    elem.style.cursor = direction === 4 ? 'default' : cursors[direction] + '-resize';
}

export function resizeStart(event) {
    document.body.onselectstart = function() { return false; };

    setResizeCursor(event);
}

export function resizeStop(event) {
    event.target.style.cursor = 'default';
    document.body.onselectstart = null;
}

export function resize(event, curPosition, blocks) {
    const elem = event.target;
    const direction = findDirection(elem, event);
    const newPosition = findNewPosition(curPosition, direction);
    if (checkResizability(newPosition, blocks)) {
        return newPosition;
    }
}

function findDirection(elem, event, senseSpace) {
    const defaultSenseSpace = 4;

    senseSpace = senseSpace || defaultSenseSpace;
    const pos = elem.getBoundingClientRect();
    const top = pos.top;
    const left = pos.left;
    const width = elem.clientWidth;
    const height = elem.clientHeight;
    const eTop = event.clientY;
    const eLeft = event.clientX;

    const isTop = eTop - top < senseSpace;
    const isRight = left + width - eLeft < senseSpace;
    const isBottom = top + height - eTop < senseSpace;
    const isLeft = eLeft - left < senseSpace;

    let direction = 4;
    if (isTop) direction = 0;
    if (isRight) direction = 1;
    if (isBottom) direction = 2;
    if (isLeft) direction = 3;

    return direction;
}

function findNewPosition(curPosition, direction, step = 1) {
    const newPosition = Object.assign({}, curPosition);
    if (direction === 0) newPosition.y1 += step;
    if (direction === 1) newPosition.x2 += step;
    if (direction === 2) newPosition.y2 += step;
    if (direction === 0) newPosition.x2 += step;
    return newPosition;
}

function checkResizability(newPosition, blocks) {
    for (const block of blocks) {
        const a = newPosition;
        const b = block.coords;
        const isOccupied = !(a.y1 > b.y2 || a.y2 < b.y1 || a.x2 < b.x1 || a.x1 > b.x2);
        if (isOccupied) return false;
    }
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
};
