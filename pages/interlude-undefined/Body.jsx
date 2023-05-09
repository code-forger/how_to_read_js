import React from 'react';
import PropTypes from 'prop-types';

const Body = props => {
    return (
        <div>
            <p>The `void` operator is an unary operator (like `-` in `-5`).</p>
            <p>It evaluates the expression on its right side, then returns undefined.</p>
            <p>The `0` is not special, it could be `void 5+9` or `void 'hello'`. Both would return `undefined`.</p>
            <p>`void 0` is 6 bytes long, where as `undefined` is 9. Using `void 0` saves 3 bytes per use!</p>
        </div>
    );
};

Body.propTypes = {

};

export default Body;