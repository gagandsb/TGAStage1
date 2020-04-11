import React, { Component } from 'react';
import NewsFeed from '../../NewsFeed';
import styles from '../styles/Home.style';
import withStyles from '../../hoc/withStyles';
import endpoints from '../../../services/endpoints';
import constants from '../../../services/constants';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagesFeed: [],
      page: 0,
      filter: constants.TOP,
    };
  }

  /**
   * @method fetchNewsFeed
   * @description fetches the news feed from the service
   * @param {page} page number index from 0
   * @param {url} feed url, default is set to top news feed
   */
  fetchNewsFeed = (page = 0, url = endpoints.TOP) => {
    const fetchUrl = `${url}${page}`;
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ pagesFeed: res.hits });
      });
  };

  /**
   * @method renderNextPage
   * @description fetch next page click on more option
   */
  renderNextPage = () => {
    const { page } = this.state;
    const newPage = page + 1;
    const { filter } = this.state;
    const filterURL =
      filter === constants.TOP ? endpoints.TOP : endpoints.NEW;
    this.setState({ page: newPage });
    this.fetchNewsFeed(newPage, filterURL);
    return false;
  };

  /**
   * @method renderTopNewsFeed
   * @description fetches the top news feed from the api
   */
  renderTopNewsFeed = () => {
    const { page } = this.state;
    this.setState({ page: 0, filter: constants.TOP });
    this.fetchNewsFeed(0, endpoints.TOP);
    return false;
  };

  /**
   * @method renderNewNewsFeed
   * @description fetch the new news feed from the api
   */
  renderNewNewsFeed = () => {
    const { page } = this.state;
    this.setState({ page: 0, filter: constants.NEW });
    this.fetchNewsFeed(0, endpoints.NEW);
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
                  className={`header-subtext ${
                    filter === constants.TOP ? 'selected' : ''
                  }`}
                  href="#"
                  onClick={this.renderTopNewsFeed}
                >
                  <span>top</span>
                </a>
                <span> | </span>
                <a
                  className={`header-subtext ${
                    filter === constants.NEW ? 'selected' : ''
                  }`}
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
