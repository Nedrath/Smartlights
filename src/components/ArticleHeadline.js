import React from "react";
import { css } from "emotion";

const ArticleHeadline = ({ headlineText, marginLeft, marginBottom }) => {
  const styleArticleHeader = css`
    margin-left: ${marginLeft && marginLeft};
  `;
  const styleH2 = css`
    color: #002d67;
    font-weight: bold;
    font-size: 1.1em;
    margin-top: 25px;
    margin-bottom: ${marginBottom && marginBottom};
  `;

  return (
    <div className={styleArticleHeader}>
      <h2 className={styleH2}>{headlineText}</h2>
    </div>
  );
};

export default ArticleHeadline;
