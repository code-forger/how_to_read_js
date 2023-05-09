import React from 'react';
import PropTypes from 'prop-types';
import dataJson from "../../resources/data.json";

const TableBody = ({data, filter}) => {
    return (
        <tbody>
        {data
            .filter(({title}) => title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
            .map(({id, title, points, priority, status}) => (
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
};

TableBody.propTypes = {

};

export default TableBody;