import { css } from "styled-components";

const styles = css`
  .app-wrapper {
    background-color: green;
    margin-top: 10px;
  }

  .header-row {
    background-color: #ff6600;
    height: 30px;
  }

  .hacker-news {
    margin-top: 10px;
  }

  .footer-row {
    height: 42px;
    background-color: #f6f6ef;
  }

  .header-text {
    font-size: 13px;
    font-weight: bold;
    text-decoration: none;
    color: black;
    margin-right: 10px;
  }

  .header-subtext {
    font-size: 11.5px;
    font-weight: semi-bold;
    text-decoration: none;
    color: black;
  }

  .selected {
    color: white;
  }

  .more-link {
    font-size: 14px;
    text-decoration: none;
    margin-left: 90px;
    color: #ff6600;
    vertical-align: -webkit-baseline-middle;
  }

`;

export default styles;
