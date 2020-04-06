import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import NewsFeed from '../../NewsFeed';
import styles from '../styles/Home.style';
import withStyles from '../../hoc/withStyles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagesFeed: [],
      page: 0,
    };
  }

  static async getInitialProps() {
    const url = `https://hn.algolia.com/api/v1/search?query=india&tags=story&page=0`;
    const res = await fetch(url);
    const results = await res.json();
    return {
      feed: results.hits,
    };
  }

  fetchNewsFeed = (page = 0) => {
    const url = `https://hn.algolia.com/api/v1/search?query=india&tags=story&page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ pagesFeed: res.hits });
      });
  };

  renderNextPage = () => {
    const { page } = this.state;
    const newPage = page + 1;
    this.setState({ page: newPage });
    this.fetchNewsFeed(newPage);
  };

  render() {
    const { pagesFeed } = this.state;
    const { className, feed = [] } = this.props;
    const data = pagesFeed && pagesFeed.length ? pagesFeed : feed;
    return (
      <div className={className}>
        <div className="container-fluid">
          <div className="hacker-news">
            <div className="row header-row">
              <div className="col">
                <a href="#" className="header-text">
                  Hacker News
                </a>
                <a href="#" className="header-subtext">
                  <span>top |</span>
                </a>
                <a href="#" className="header-subtext">
                  <span> new</span>
                </a>
              </div>
            </div>
            <div className="row">
              <NewsFeed feed={data} className="news-wrapper" />
            </div>
            <div className="row footer-row">
              <div className="col">
                <a
                  href="javascript:void(0);"
                  onClick={this.renderNextPage}
                  className="more-link"
                >
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(Home, styles);
export { Home as HomeVanilla };
