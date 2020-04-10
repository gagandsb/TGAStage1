export const GET_NEWS_FEED = "GET_NEWS_FEED";
export const GET_NEWS_FEED_COMPLETE = "GET_NEWS_FEED_COMPLETE";

export const getNewsFeed = () =>  ({
  type: GET_NEWS_FEED
});

export const getNewsFeedComplete = () => ({
  type: GET_NEWS_FEED_COMPLETE
});
