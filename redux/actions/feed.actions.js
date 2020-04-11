export const GET_NEWS_FEED = "GET_NEWS_FEED";
export const GET_NEWS_FEED_COMPLETE = "GET_NEWS_FEED_COMPLETE";

export const getNewsFeed = (payload) =>  ({
  type: GET_NEWS_FEED,
  payload,
});

export const getNewsFeedComplete = (payload) => ({
  type: GET_NEWS_FEED_COMPLETE,
  payload
});
