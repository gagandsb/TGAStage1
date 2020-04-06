import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import NewsFeed from '../../NewsFeed';
import styles from '../styles/Home.style';
import withStyles from '../../hoc/withStyles';

const URL_MAPPING = {
  TOP: 'https://hn.algolia.com/api/v1/search?tags=front_page&page=',
  NEW:
    'https://hn.algolia.com/api/v1/search_by_date?query=india&tags=story&page=',
};

const FILTERS = {
  TOP: 'top',
  NEW: 'new'
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagesFeed: [],
      page: 0,
      filter: FILTERS.TOP
    };
  }

  static async getInitialProps() {
    const url = `${URL_MAPPING.TOP}0`;
    const res = await fetch(url);
    const results = await res.json();
    return {
      feed: results.hits,
    };
  }

  fetchNewsFeed = (page = 0, url = URL_MAPPING.TOP) => {
    const fetchUrl = `${url}${page}`;
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ pagesFeed: res.hits });
      });
  };

  renderNextPage = () => {
    const { page } = this.state;
    const newPage = page + 1;
    const { filter } = this.state;
    const filterURL = filter === FILTERS.TOP ? URL_MAPPING.TOP : URL_MAPPING.NEW;
    this.setState({ page: newPage });
    this.fetchNewsFeed(newPage, filterURL);
    return false;
  };

  renderTopNewsFeed = () => {
    const { page } = this.state;
    this.setState({ page: 0, filter: FILTERS.TOP });
    this.fetchNewsFeed(0, URL_MAPPING.TOP);
    return false;
  };

  renderNewNewsFeed = () => {
    const { page } = this.state;
    this.setState({ page: 0, filter: FILTERS.NEW });
    this.fetchNewsFeed(0, URL_MAPPING.NEW);
    return false;
  };

  render() {
    const { pagesFeed, filter } = this.state;
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
                <a
                  className={`header-subtext ${filter === FILTERS.TOP ? 'selected' : ''}`}
                  href="#"
                  onClick={this.renderTopNewsFeed}
                >
                  <span>top</span>
                </a>
                <span> | </span>
                <a
                 className={`header-subtext ${filter === FILTERS.NEW ? 'selected' : ''}`}
                  href="#"
                  onClick={this.renderNewNewsFeed}
                >
                  <span>new</span>
                </a>
              </div>
            </div>
            <div className="row">
              <NewsFeed feed={data} className="news-wrapper" />
            </div>
            <div className="row footer-row">
              <div className="col">
                <a href="#" onClick={this.renderNextPage} className="more-link">
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
