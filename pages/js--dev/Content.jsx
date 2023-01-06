import React from 'react';
import PropTypes from 'prop-types';
import './Content.css'
import dataJson from '../../resources/data.json';
import {calculateIncompletePoints} from "./utils.mjs";

function Content(props) {
  return (
      <>
          <table>
              <thead>
              <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Points</th>
                  <th>Priority</th>
                  <th>Status</th>
              </tr>
              </thead>
              <tbody>
              {dataJson.map(({id, title, points, priority, status}) => (
                  <tr key={id}>
                      <td>{id}</td>
                      <td>{title}</td>
                      <td>{points}</td>
                      <td>{priority}</td>
                      <td>{status}</td>
                  </tr>
              ))}
              </tbody>
          </table>
          <br/>
          <p>
              Total Incomplete Points: {calculateIncompletePoints(dataJson)}
          </p>
      </>

  );
}

Content.propTypes = {

};

export default Content;
