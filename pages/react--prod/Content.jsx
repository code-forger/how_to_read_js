import React from 'react';
import dataJson from '../../resources/data.json';
import { calculateIncompletePoints } from './utils.mjs';
import Filter from './Filter';
import TableBody from './TableBody';

function Content() {
  const [filter, setFilter] = React.useState('');

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
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
        <TableBody data={dataJson} filter={filter} />
      </table>
      <br />
      <p>
        Total Incomplete Points:
        {' '}
        {calculateIncompletePoints(dataJson)}
      </p>
    </>

  );
}

Content.propTypes = {

};

export default Content;
