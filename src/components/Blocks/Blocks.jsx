import './blocks.css';
import { Block } from './Block';
import { useSelector } from 'react-redux';

export const BlockList = () => {
    const blocks = useSelector(state => state.blocks);

    return (
        <div className='blocks'>
            {
                blocks?.map((block, i) => {
                    return <Block key={i} state={block} />;
                })
            }
        </div>
    );
};
