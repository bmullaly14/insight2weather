import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
interface ErrorBoundaryProps {
    children: ReactNode;
  }

  class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  render(): ReactNode {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <div>
          <div>
            <span>
              <h1>Something went wrong</h1>  
              <h3>{error?.message}</h3>
            </span>
          </div>
        </div>
      );
    }

    // Render the children if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;