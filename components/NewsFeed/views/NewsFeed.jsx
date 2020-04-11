import React, { Component } from 'react';
import styles from '../styles/NewsFeed.style';
import withStyles from '../../hoc/withStyles';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { setLocalStorageForFeedUpVotes, getLocalStorageFeedValue } from '../../../utils/feed.util';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upVotes: 0,
    };
  }

  /**
   * @method renderListItems
   * @description render news feed item
   * @param {object} item - every news feed item object from the API
   * @param {number} index - index of every news feed
   */
  renderListItems = (item, index) => {
    const { title, num_comments, objectID, url, author, created_at } = item;
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    const createdAt = timeAgo.format(new Date(created_at));
    return (
      <div className="feeds-wrapper" key={index}>
        <div className="row feeds-container">
          <div className="desktop-comments">
            <div className="comments-column">
              <span>{num_comments}</span>
            </div>
            <div className="upvote-column">
              <span>{getLocalStorageFeedValue(objectID)}</span>
              <img
                src="/static/images/arrow-up.gif"
                alt="up arrow"
                className="arrow"
                onClick={() => this.setFeedUpVotes(objectID)}
              />
            </div>
          </div>
          <div className="col news-title">
            <span className="news-text">{title}</span>
            <a href={url} className="news-subtext-url" target="_blank">
              ({url})
            </a>
            <span className="news-subtext-author">by {author}</span>
            <span className="news-subtext-time">{createdAt}</span>
          </div>
        </div>
        <div className="row mobile-comments" key={index}>
          <div className="comments-column">
            <span>{num_comments}</span>
          </div>
          <div className="upvote-column">
            <span>{getLocalStorageFeedValue(objectID)}</span>
            <img
              src="/static/images/arrow-up.gif"
              alt="up arrow"
              className="arrow"
              onClick={() => this.setFeedUpVotes(objectID)}
            />
          </div>
        </div>
      </div>
    );
  };

  /**
   * @method setFeedUpVotes
   * @description set object id key to increment up votes count on the localStorage
   * @param {string} key - unique object id of each news feed
   */
  setFeedUpVotes = (key) => {
    setLocalStorageForFeedUpVotes(key);
    const { upVotes } = this.state;
    this.setState({ upVotes: upVotes + 1 });
  };

  render() {
    const { feed, className } = this.props;
    return (
      <div className={className}>
        {feed.map((val, index) => this.renderListItems(val, index))}
      </div>
    );
  }
}

export default withStyles(NewsFeed, styles);
export { NewsFeed as NewsFeedVanilla };
