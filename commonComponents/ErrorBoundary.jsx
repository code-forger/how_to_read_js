import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
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
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
