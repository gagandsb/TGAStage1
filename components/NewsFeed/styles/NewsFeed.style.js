import { css } from 'styled-components';

const styles = css`
  .arrow {
    width: 10px;
    height: 10px;
    margin: 4px 4px 8px 4px;
  }

  .news-text {
    font-size: 13px;
    margin-right: 5px;
    display: inline-block;
  }

  .news-subtext {
    font-size: 9px;
    margin-right: 5px;
  }

  .news-subtext-time {
    font-size: 10px;
    margin-right: 5px;
    color: rgb(130, 130, 130);
  }

  .news-subtext-url {
    font-size: 10px;
    text-decoration: none;
    margin-right: 5px;
    color: rgb(130, 130, 130);
  }

  .news-subtext-author {
    font-size: 11px;
    margin-right: 5px;
  }

  .upvote-column {
    font-size: 11px;
    width: 25px;
    padding-top: 3px;
    display: inline-block;
  }

  .comments-column {
    width: 25px;
    font-size: 11px;
    margin-left: 30px;
    margin-right: 10px;
    padding-top: 3px;
    display: inline-block;
  }

  .feeds-wrapper :nth-child(even) {
    background-color: #E7E7DF;
  }

  .feeds-wrapper :nth-child(odd) {
    background-color: #f6f6ef;
  }

  .feeds-container {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
  .desktop-comments {
    display: flex;
    align-items: center;
    justify-content: center
  }

  .news-title {
    padding: 2px;
  }

  .mobile-comments {
    display: none;
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  @media (max-width: 767px) {
    .desktop-comments {
      display: none;
    }

    .mobile-comments {
      display: block;
    }

    .comments-column {
      margin-left: 10px;
    }

    .news-title {
      padding: 10px;
    }
  }
`;

export default styles;
