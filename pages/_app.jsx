import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from 'styled-components';
import store from '../redux/store';

const theme = {
  colors: {
    primary: '#0070f4',
  },
};

class PSHackerNews extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    );
  }
}

const makeStore = () => store;

//withRedux wrapper that passes the store to the PSHackerNews Component
export default withRedux(makeStore)(PSHackerNews);
