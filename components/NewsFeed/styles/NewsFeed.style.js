import { css } from "styled-components";

const styles = css`
  .arrow {
      width: 10px;
      height: 10px;
  }

  .news-text {
    font-size: 13px;
    margin-right: 5px;
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
  }

  .comments-column {
    width: 25px;
    font-size: 11px;
    margin-left: 30px;
    margin-right: 10px;
    padding-top: 3px;
  }

  .row :nth-child(even){
    background-color: #E7E7DF;
  }
  .row :nth-child(odd){
    background-color: #f6f6ef;
  }

  .feeds-container {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
`;

export default styles;
