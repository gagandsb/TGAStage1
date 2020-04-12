import React from 'react';
import { connect } from 'react-redux';
import Home from '../views/Home';
import { getNewsFeed } from '../../../redux/actions/feed.actions';
import { getFeedState } from '../../../redux/selectors/feed.selector';
import { getInitialNewsFeedService } from '../../../services/abstractors/feed.abstractor';

export class HomeContainer extends React.Component {
  static async getInitialProps() {
    return {
      feed: await getInitialNewsFeedService(),
    };
  }

  render() {
    const { ...otherProps } = this.props;
    return <Home {...otherProps} />;
  }
}
export const mapStateToProps = (state) => {
  return {
    feedItems: getFeedState(state),
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getNewsFeedDispatch: (data) => {
    dispatch(getNewsFeed(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
