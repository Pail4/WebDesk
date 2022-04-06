import { useState } from 'react';
import { Search } from './Search';
import { BlockList } from './Blocks';
import { Header } from './Header';
import { SettingsIcon } from './Settings';
import { BlockEditor } from './BlockEditor';

function App() {
    return (
        <div className="App">
            <SettingsIcon />
            <Search />
            <Header />
            <BlockList/>
            <BlockEditor />
        </div>
    );
}

export default App;
