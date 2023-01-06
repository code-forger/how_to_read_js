import React from 'react';
import contentsJson from '../../resources/contents.json';
import './Content.css';
import PropTypes from 'prop-types';

function Content(props) {
  return (
    <ul>
      {contentsJson.map(({ title, slug, indentation }) => (
        <p className={`contents-indentation-${indentation}`}><a href={`/${slug}`}>{title}</a></p>
      ))}
    </ul>
  );
}

Content.propTypes = {

};

export default Content;
