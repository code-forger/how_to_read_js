import React from 'react';
import contentsJson from '../../resources/contents.json';
import './Content.css';

function Content() {
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
