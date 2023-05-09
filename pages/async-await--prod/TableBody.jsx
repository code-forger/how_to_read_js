import React from 'react';
import PropTypes from 'prop-types';

function TableBody({ data, filter }) {
  return (
    <tbody>
      {data
        .filter(({ title }) => title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
        .map(({
          id, title, points, priority, status,
        }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{points}</td>
            <td>{priority}</td>
            <td>{status}</td>
          </tr>
        ))}
    </tbody>
  );
}

TableBody.propTypes = {
  data: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  filter: PropTypes.string.isRequired,
};

export default TableBody;
