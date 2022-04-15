import { React } from 'react';

export const SearchCompany = ({ iconUrl }) => {
    return (
        <div className="search-company">
            <img src={iconUrl} alt="company-icon" />
        </div>
    );
};
