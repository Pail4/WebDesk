import './blocks.css';
import { defaultStore } from '../../store/store';
import { Block } from './Block';

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
            <Block
                state = {defaultStore.blocks[4]}
            />
            <Block
                state = {defaultStore.blocks[5]}
            />
            <Block
                state = {defaultStore.blocks[6]}
            />
            <Block
                state = {defaultStore.blocks[7]}
            />
        </div>
    );
};
