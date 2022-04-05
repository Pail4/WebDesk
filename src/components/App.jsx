import { useState } from 'react';
import { Search } from './Search';
import { BlockList } from './Blocks';
import { Header } from './Header';
import { SettingsIcon } from './Settings';

function App() {
    return (
        <div className="App">
            <SettingsIcon />
            <Search />
            <Header />
            <BlockList></BlockList>
        </div>
    );
};

export default App;
