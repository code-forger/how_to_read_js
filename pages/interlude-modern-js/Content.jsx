/* eslint-disable no-unused-vars -- This is the intentional bug in this file */
import React from 'react';
import PropTypes from 'prop-types';
import hash from 'object-hash';
import { calculateIncompletePoints, readTodos, readUser } from './utils.mjs';
import Filter from './Filter';
import TableBody from './TableBody';

const START_LOADING = Symbol('START_LOADING');
const SET_DATA = Symbol('SET_DATA');
const SET_ERROR = Symbol('SET_ERROR');

const startLoading = () => ({ type: START_LOADING });
const setData = (data) => ({ type: SET_DATA, data });
const setError = (error) => ({ type: SET_ERROR, error });

const reducer = (state = { loading: false, error: null, data: null }, action = { type: 'NONE' }) => {
  switch (action.type) {
    case START_LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case SET_DATA:
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case SET_ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
};

const loadData = async (dispatch) => {
  try {
    await dispatch(startLoading());
    const userResponse = await readUser();
    const user = await userResponse.json();
    const userHash = hash(user);
    const todosResponse = await readTodos(userHash);
    const data = await todosResponse.jso();
    await dispatch(setData(data));
  } catch (err) {
    await dispatch(setError(err));
  }
};

// This function is identical to loadData, to prevent inlining of imported functions
const reLoadData = async (dispatch) => {
  try {
    await dispatch(startLoading());
    const userResponse = await readUser();
    const user = await userResponse.json();
    const userHash = hash(user);
    const todosResponse = await readTodos(userHash);
    const data = await todosResponse.json();
    await dispatch(setData(data));
  } catch (err) {
    await dispatch(setError(err));
  }
};

function Content() {
  const [filter, setFilter] = React.useState('');
  const [state, dispatch] = React.useReducer(reducer);
  const { loading, error, data } = state || {};
  React.useEffect(() => { loadData(dispatch); }, []);
  const reloadData = React.useCallback(() => { reLoadData(dispatch); }, []);

  return (
    <>
      {loading && (<p>Loading...</p>)}
      {error && (
      <div className="error-page">
        <p><em>Something went wrong while rendering this page!</em></p>
        <p><em>Your mission is to fix it.</em></p>
        <br />
        <pre className="code error-message clamp-to-view">
          {error.toString()}
          <br />
          <br />
          {error.stack}
        </pre>
      </div>
      )}
      { data && (
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
            <TableBody data={data} filter={filter} />
          </table>
          <br />
          <p>
            Total Incomplete Points:
            {' '}
            {calculateIncompletePoints(data)}
          </p>
        </>
      )}
    </>

  );
}

Content.propTypes = {

};

export default Content;
