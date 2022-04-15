import { React, useState } from 'react';
import { SearchCompany } from './SearchCompany';
import { SearchIcon } from './SearchIcon';

export const SearchBar = ({ apiUrl, iconUrl }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <form
            action=""
            className="search-bar"
            onSubmit={(e) => {
                e.preventDefault();
                window.open(`${apiUrl + searchValue}`, 'value');
                setSearchValue('');
            }}>
            <SearchCompany iconUrl={iconUrl} />
            <input className="search-input"
                type="search"
                placeholder="Введите поисковый запрос или URL"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} />
            <SearchIcon />
        </form>
    );
};
