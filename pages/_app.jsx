import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import withReduxSaga from 'next-redux-saga';
import { ThemeProvider } from 'styled-components';
import store from '../redux/store';
import configureStore from '../redux/configureStore';

const theme = {
  colors: {
    primary: '#0070f4',
  },
};

class PSHackerNews extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
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

export default withRedux(configureStore)(withReduxSaga(PSHackerNews));

