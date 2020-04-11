  /**
   * @method setLocalStorageForFeedUpVotes
   * @description set object id key to increment up votes count on the localStorage
   * @param {string} key - unique object id of each news feed
   */
  export const setLocalStorageForFeedUpVotes = (key) => {
    const items = getAllNewsData('NewsUpVotes');
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
  };

    /**
   * @method getLocalStorageFeedValue
   * @description gets the value from localStorage
   * @param {string} key - news feed object id key from the api
   */
  export const getLocalStorageFeedValue = (key) => {
    const results = getAllNewsData();
    if (results && results.length) {
      const item = results.find((i) => i.name === key);
      return item && item.name ? item.value : 0;
    }
    return 0;
  };

  /**
   * @method getAllNewsData
   * @description gets all news items up vote data from the localStorage
   */
  const getAllNewsData = () => {
    if (isClient()) {
      const items = window.localStorage.getItem('NewsUpVotes');
      return JSON.parse(items);
    }
    return [];
  };

  const isClient = () => typeof window !== 'undefined';
