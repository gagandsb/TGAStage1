import React from 'react';
import { shallow } from 'enzyme';
import { NewsFeedVanilla as NewsFeed } from '../views/NewsFeed';

describe('News Feed component', () => {
  let props;
  let component;
  beforeEach(() => {
    props = {
      className: '',
      feed: [
        {
          "created_at": "2020-04-10T06:17:01.000Z",
          "title": "India heartwarming messages in fight against COVID-19",
          "url": "https://together-india.com/",
          "author": "ankit_mishra",
          "points": 3,
          "story_text": null,
          "comment_text": null,
          "num_comments": 0,
          "story_id": null,
          "story_title": null,
          "story_url": null,
          "parent_id": null,
          "created_at_i": 1586499421,
          "_tags": [
            "story",
            "author_ankit_mishra",
            "story_22830467"
          ],
          "objectID": "22830467",
          "_highlightResult": {
            "title": {
              "value": "<em>India</em> heartwarming messages in fight against COVID-19",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            },
            "url": {
              "value": "https://together-<em>india</em>.com/",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            },
            "author": {
              "value": "ankit_mishra",
              "matchLevel": "none",
              "matchedWords": []
            }
          }
        },
        {
          "created_at": "2020-04-10T04:44:55.000Z",
          "title": "Dil mil (indian dating app) exposes exact user geolocation",
          "url": "https://medium.com/@kunala/how-i-hacked-dil-mil-indian-dating-app-to-expose-a-users-exact-location-3eb09bfc3fcd",
          "author": "kunala",
          "points": 3,
          "story_text": null,
          "comment_text": null,
          "num_comments": 1,
          "story_id": null,
          "story_title": null,
          "story_url": null,
          "parent_id": null,
          "created_at_i": 1586493895,
          "_tags": [
            "story",
            "author_kunala",
            "story_22830037"
          ],
          "objectID": "22830037",
          "_highlightResult": {
            "title": {
              "value": "Dil mil (<em>india</em>n dating app) exposes exact user geolocation",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            },
            "url": {
              "value": "https://medium.com/@kunala/how-i-hacked-dil-mil-<em>india</em>n-dating-app-to-expose-a-users-exact-location-3eb09bfc3fcd",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            },
            "author": {
              "value": "kunala",
              "matchLevel": "none",
              "matchedWords": []
            }
          }
        },
        {
          "created_at": "2020-04-09T19:42:39.000Z",
          "title": "How react suspense displays loading indicators",
          "url": "https://twitter.com/dani_akash_/status/1247617443897290752",
          "author": "DaniAkash",
          "points": 1,
          "story_text": null,
          "comment_text": null,
          "num_comments": 0,
          "story_id": null,
          "story_title": null,
          "story_url": null,
          "parent_id": null,
          "created_at_i": 1586461359,
          "_tags": [
            "story",
            "author_DaniAkash",
            "story_22826393"
          ],
          "objectID": "22826393",
          "_highlightResult": {
            "title": {
              "value": "How react suspense displays loading <em>indica</em>tors",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            },
            "url": {
              "value": "https://twitter.com/dani_akash_/status/1247617443897290752",
              "matchLevel": "none",
              "matchedWords": []
            },
            "author": {
              "value": "DaniAkash",
              "matchLevel": "none",
              "matchedWords": []
            }
          }
        },
        {
          "created_at": "2020-04-09T18:05:51.000Z",
          "title": "Learning Multi-dimensional indices: The next big thing in OLAP DBs",
          "url": "https://www.kharekartik.dev/2020/04/09/learning-multi-dimensional-indices/",
          "author": "kkcorps",
          "points": 4,
          "story_text": null,
          "comment_text": null,
          "num_comments": 0,
          "story_id": null,
          "story_title": null,
          "story_url": null,
          "parent_id": null,
          "created_at_i": 1586455551,
          "_tags": [
            "story",
            "author_kkcorps",
            "story_22825432"
          ],
          "objectID": "22825432",
          "_highlightResult": {
            "title": {
              "value": "Learning Multi-dimensional <em>indic</em>es: The next big thing in OLAP DBs",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            },
            "url": {
              "value": "https://www.kharekartik.dev/2020/04/09/learning-multi-dimensional-<em>indic</em>es/",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            },
            "author": {
              "value": "kkcorps",
              "matchLevel": "none",
              "matchedWords": []
            }
          }
        },
        {
          "created_at": "2020-04-09T12:55:21.000Z",
          "title": "Getting to £4k MRR by sharing great user flow examples: PageFlows.com",
          "url": "https://www.indiebeers.co/interviews/page-flows-ramy-khuffash-indiebeers",
          "author": "indiebeers",
          "points": 9,
          "story_text": null,
          "comment_text": null,
          "num_comments": 0,
          "story_id": null,
          "story_title": null,
          "story_url": null,
          "parent_id": null,
          "created_at_i": 1586436921,
          "_tags": [
            "story",
            "author_indiebeers",
            "story_22822045"
          ],
          "objectID": "22822045",
          "_highlightResult": {
            "title": {
              "value": "Getting to £4k MRR by sharing great user flow examples: PageFlows.com",
              "matchLevel": "none",
              "matchedWords": []
            },
            "url": {
              "value": "https://www.<em>indie</em>beers.co/interviews/page-flows-ramy-khuffash-<em>indie</em>beers",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            },
            "author": {
              "value": "<em>indie</em>beers",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            }
          }
        },
        {
          "created_at": "2020-04-09T08:33:13.000Z",
          "title": "Mitigating the effects of video call latency through UI",
          "url": null,
          "author": "ohmyblock",
          "points": 1,
          "story_text": "Quick idea: Show a progress bar during the video call indicating how long I have to wait before talking to avoid interrupting the other person? The progress bar speed should change depending on the current latency.",
          "comment_text": null,
          "num_comments": 0,
          "story_id": null,
          "story_title": null,
          "story_url": null,
          "parent_id": null,
          "created_at_i": 1586421193,
          "_tags": [
            "story",
            "author_ohmyblock",
            "story_22820766"
          ],
          "objectID": "22820766",
          "_highlightResult": {
            "title": {
              "value": "Mitigating the effects of video call latency through UI",
              "matchLevel": "none",
              "matchedWords": []
            },
            "author": {
              "value": "ohmyblock",
              "matchLevel": "none",
              "matchedWords": []
            },
            "story_text": {
              "value": "Quick idea: Show a progress bar during the video call <em>indica</em>ting how long I have to wait before talking to avoid interrupting the other person? The progress bar speed should change depending on the current latency.",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            }
          }
        },
        {
          "created_at": "2020-04-09T07:00:33.000Z",
          "title": "Notes on tech from India's largest stockbroker – Bootstrapped and FOSS first",
          "url": "https://zerodha.tech/blog/hello-world/",
          "author": "tango12",
          "points": 2,
          "story_text": null,
          "comment_text": null,
          "num_comments": 0,
          "story_id": null,
          "story_title": null,
          "story_url": null,
          "parent_id": null,
          "created_at_i": 1586415633,
          "_tags": [
            "story",
            "author_tango12",
            "story_22820418"
          ],
          "objectID": "22820418",
          "_highlightResult": {
            "title": {
              "value": "Notes on tech from <em>India</em>'s largest stockbroker – Bootstrapped and FOSS first",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            },
            "url": {
              "value": "https://zerodha.tech/blog/hello-world/",
              "matchLevel": "none",
              "matchedWords": []
            },
            "author": {
              "value": "tango12",
              "matchLevel": "none",
              "matchedWords": []
            }
          }
        },
        {
          "created_at": "2020-04-09T06:20:22.000Z",
          "title": "OYO furloughs thousands of employees as revenue drops by over 50%",
          "url": "https://techcrunch.com/2020/04/08/indias-oyo-furloughs-thousands-of-employees-as-revenue-drops-by-over-50/",
          "author": "JumpCrisscross",
          "points": 97,
          "story_text": null,
          "comment_text": null,
          "num_comments": 42,
          "story_id": null,
          "story_title": null,
          "story_url": null,
          "parent_id": null,
          "created_at_i": 1586413222,
          "_tags": [
            "story",
            "author_JumpCrisscross",
            "story_22820263"
          ],
          "objectID": "22820263",
          "_highlightResult": {
            "title": {
              "value": "OYO furloughs thousands of employees as revenue drops by over 50%",
              "matchLevel": "none",
              "matchedWords": []
            },
            "url": {
              "value": "https://techcrunch.com/2020/04/08/<em>india</em>s-oyo-furloughs-thousands-of-employees-as-revenue-drops-by-over-50/",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            },
            "author": {
              "value": "JumpCrisscross",
              "matchLevel": "none",
              "matchedWords": []
            }
          }
        },
        {
          "created_at": "2020-04-09T04:49:41.000Z",
          "title": "Actors Who Are So Similar That They Were Indistinguishable from Each Other",
          "url": "https://pictolic.com/en/article/17-actors-who-are-so-similar-that-they-were-indistinguishable-from-each-other",
          "author": "penteston",
          "points": 2,
          "story_text": null,
          "comment_text": null,
          "num_comments": 1,
          "story_id": null,
          "story_title": null,
          "story_url": null,
          "parent_id": null,
          "created_at_i": 1586407781,
          "_tags": [
            "story",
            "author_penteston",
            "story_22819866"
          ],
          "objectID": "22819866",
          "_highlightResult": {
            "title": {
              "value": "Actors Who Are So Similar That They Were <em>Indis</em>tinguishable from Each Other",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            },
            "url": {
              "value": "https://pictolic.com/en/article/17-actors-who-are-so-similar-that-they-were-<em>indis</em>tinguishable-from-each-other",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            },
            "author": {
              "value": "penteston",
              "matchLevel": "none",
              "matchedWords": []
            }
          }
        },
        {
          "created_at": "2020-04-09T03:39:17.000Z",
          "title": "Land-Grab Universities",
          "url": "https://www.hcn.org/issues/52.4/indigenous-affairs-education-land-grab-universities",
          "author": "axiomdata316",
          "points": 1,
          "story_text": null,
          "comment_text": null,
          "num_comments": 0,
          "story_id": null,
          "story_title": null,
          "story_url": null,
          "parent_id": null,
          "created_at_i": 1586403557,
          "_tags": [
            "story",
            "author_axiomdata316",
            "story_22819554"
          ],
          "objectID": "22819554",
          "_highlightResult": {
            "title": {
              "value": "Land-Grab Universities",
              "matchLevel": "none",
              "matchedWords": []
            },
            "url": {
              "value": "https://www.hcn.org/issues/52.4/<em>indig</em>enous-affairs-education-land-grab-universities",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                "india"
              ]
            },
            "author": {
              "value": "axiomdata316",
              "matchLevel": "none",
              "matchedWords": []
            }
          }
        }
      ]
    };
    component = shallow(<NewsFeed {...props} />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
