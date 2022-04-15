import { React } from 'react';
import { Search } from './Search/Search';
import { Settings } from './Settings/Settings';
import { Header } from './Header/Header';
import { BlockEditor } from './BlockEditor/BlockEditor';
import { BlockList } from './Blocks/Blocks';

function App() {
    return (
        <div className="App">
            <Settings />
            <Search />
            <Header />
            <BlockList/>
            <BlockEditor />
        </div>
    );
}

export default App;
