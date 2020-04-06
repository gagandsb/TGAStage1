import React, { Component } from 'react';
import styles from '../styles/NewsFeed.style';
import withStyles from '../../../hoc/withStyles';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upVotes: 0,
    };
  }

  renderListItems = (item, index) => {
    const { title, num_comments, objectID, url, author, created_at } = item;
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    const createdAt = timeAgo.format(new Date(created_at));
    return (
      <div className="row feeds-container" key={index}>
        <div className="comments-column">
          <span>{num_comments}</span>
        </div>
        <div className="upvote-column">
          <span>{this.getLocalStorageValue(objectID)}</span>
          <img
            src="/static/images/arrow-up.gif"
            alt="up arrow"
            className="arrow"
            onClick={() => this.setLocalStorage(objectID)}
          />
        </div>
        <div className="col">
          <span className="news-text">{title}</span>
          <a href={url} className="news-subtext-url" target="_blank">
            ({url})
          </a>
          <span className="news-subtext-author">by {author}</span>
          <span className="news-subtext-time">{createdAt}</span>
        </div>
      </div>
    );
  };

  setLocalStorage = (key) => {
    const items = this.getAllNewsData('NewsUpVotes');
    let results = [];
    let item = {};
    let val = 1;
    let index = -1;
    if (items && items.length) {
      results = items;
      const object = results.find((i) => i.name === key);
      index = results.findIndex((i) => i.name === key);
      val = object ? object.value + 1 : 1;
    }
    item.name = key;
    item.value = val;
    if (index !== -1) {
      results[index] = item;
    } else {
      results.push(item);
    }
    localStorage.setItem('NewsUpVotes', JSON.stringify(results));
    const { upVotes } = this.state;
    this.setState({ upVotes: upVotes + 1 });
  };

  getLocalStorageValue = (key) => {
    const results = this.getAllNewsData();
    if (results && results.length) {
      const item = results.find((i) => i.name === key);
      return item && item.name ? item.value : 0;
    }
    return 0;
  };

  getAllNewsData = () => {
    if (this.isClient()) {
      const items = window.localStorage.getItem('NewsUpVotes');
      return JSON.parse(items);
    }
    return [];
  };

  isClient() {
    return typeof window !== 'undefined';
  }

  render() {
    const { feed, className } = this.props;
    console.log(feed);
    return (
      <div className={className}>
        <div className="feed-wrapper">
          {feed.map((val, index, arr) => this.renderListItems(val, index))}
        </div>
      </div>
    );
  }
}

export default withStyles(NewsFeed, styles);
export { NewsFeed as NewsFeedVanilla };
