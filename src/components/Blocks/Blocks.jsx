import './blocks.css';

import { Block } from './Block';
import { useSelector } from 'react-redux';
import React from 'react';

export const BlockList = () => {
    const blocks = useSelector(state => state.blocks);
    function createBlockList(blocks) {
        if (!blocks) return null;
        return blocks.map((block) => {
            return (
                <Block state={block} key={block.id} />
            );
        });
    };

    return (
        <div className='blocks'>
            {createBlockList(blocks)}
        </div>
    );
};
