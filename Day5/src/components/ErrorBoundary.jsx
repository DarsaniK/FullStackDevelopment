import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false}
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>Please try again later.</p>
    }

    return (
        <div>ErrorBoundary</div>
    )
  }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
}