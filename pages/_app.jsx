import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f4',
  },
}

class PSHackerNews extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          </ThemeProvider>
      </Container>
    );
  }
}

export default PSHackerNews;
