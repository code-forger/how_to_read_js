import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  // componentDidCatch(error, errorInfo) { // You can also log the error to an error reporting service
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) { // You can render any custom fallback UI
      return <div className='error-page'>
        <p><em>Something went wrong while rendering this page!</em></p>
        <p><em>Your mission is to fix it.</em></p>
        <br />
        <pre className='code error-message clamp-to-view'>
          {this.state.error.toString()}
          <br/>
          <br/>
          {this.state.error.stack}
        </pre>
      </div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;