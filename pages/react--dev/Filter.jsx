import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({setFilter}) => {
    const [inputText, setInputText] = React.useState('');

    const handleOnChange = React.useCallback((e) => setInputText(e.target.value));
    const handleOnClick = React.useCallback(() => setFilter(inputText), [inputText]);

    return (
        <div>
            <label htmlFor="filter">Filter By Text:</label>
            <input placeholder='filter text' type="text" id="filter" value={inputext} onChange={handleOnChange}/>
            <button type='button' onClick={handleOnClick}>Filter</button>
        </div>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default Filter;