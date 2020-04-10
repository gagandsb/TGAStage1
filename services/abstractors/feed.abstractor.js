const URL_MAPPING = {
  TOP: 'https://hn.algolia.com/api/v1/search?tags=front_page&page=',
  NEW:
    'https://hn.algolia.com/api/v1/search_by_date?query=india&tags=story&page=',
};

export const getNewsFeedService = (args) => {
  const {} = args;
  const url = `${URL_MAPPING.TOP}0`;
  const res = fetch(url)
    .then((res) => res.json())
    .then((results) => results.hits);
};
