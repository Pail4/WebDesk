import { useState } from 'react';

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

const SearchCompany = ({ iconUrl }) => {
    return (
        <div className="search-company">
            <img src={iconUrl} alt="company-icon" />
        </div>
    );
};

const SearchIcon = () => {
    return (
        <button type="submit" className="search-icon">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M26.9375 23.75H25.2588L24.6638 23.1763C26.8182 20.6773 28.0023 17.487 28 14.1875C28 11.4557 27.1899 8.78515 25.6722 6.51369C24.1544 4.24224 21.9972 2.47186 19.4733 1.42642C16.9494 0.380985 14.1722 0.107451 11.4928 0.64041C8.81346 1.17337 6.35231 2.48888 4.42059 4.42059C2.48888 6.35231 1.17337 8.81346 0.64041 11.4928C0.107451 14.1722 0.380985 16.9494 1.42642 19.4733C2.47186 21.9972 4.24224 24.1544 6.51369 25.6722C8.78515 27.1899 11.4557 28 14.1875 28C17.6088 28 20.7538 26.7463 23.1763 24.6638L23.75 25.2588V26.9375L34.375 37.5413L37.5413 34.375L26.9375 23.75ZM14.1875 23.75C8.89626 23.75 4.62501 19.4788 4.62501 14.1875C4.62501 8.89626 8.89626 4.62501 14.1875 4.62501C19.4788 4.62501 23.75 8.89626 23.75 14.1875C23.75 19.4788 19.4788 23.75 14.1875 23.75Z"
                    fill="#5F6368" />
            </svg>
        </button>
    );
};
