/* eslint-disable no-undef -- This is the intentional bug in this file */
import React from 'react';
import PropTypes from 'prop-types';

function Filter({ setFilter }) {
  const [inputText, setInputText] = React.useState('');

  const handleOnChange = React.useCallback((e) => setInputText(e.target.value), []);
  const handleOnClick = React.useCallback(() => setFilter(inputText), [inputText, setFilter]);

  return (
    <div>
      <label htmlFor="filter">
        Filter By Text:
        <input placeholder="filter text" type="text" id="filter" value={inputext} onChange={handleOnChange} />
      </label>
      <button type="button" onClick={handleOnClick}>Filter</button>
    </div>
  );
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
