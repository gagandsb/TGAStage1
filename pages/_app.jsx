import App from "next/app";
import React from "react";

class PSHackerNews extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default PSHackerNews;
