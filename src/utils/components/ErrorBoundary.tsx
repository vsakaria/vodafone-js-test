import React, { ReactElement } from "react";

export default class ErrorBoundary extends React.Component<any> {
  state = { hasError: false };

  componentDidCatch(): void {
    this.setState({ hasError: true });
    const data = {};
    console.error("An error occured in a React component", data);
  }

  render(): ReactElement | any {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
