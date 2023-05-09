/* eslint-disable no-undef -- This is the intentional bug in this file */
import React from 'react';
import './Content.css';
import PropTypes from 'prop-types';
import Body from './Body';

function Content({ age }) {
  return (
    <>
      <pre className="code clamp-to-view">
        { ae === undefined ? <span>Age not specified</span> : (
          <span>
            {age}
            {' '}
            years old
          </span>
        ) }
      </pre>
      <Body />
    </>
  );
}

Content.propTypes = {
  age: PropTypes.number,
};

Content.defaultProps = {
  age: undefined,
};

export default Content;
