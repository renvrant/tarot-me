/* @flow */

import React from 'react';

type PropTypes = { linkUrl: string, linkName: string };

const CardMeaningLink = ({ linkUrl, linkName }: PropTypes) =>
  <li className="dib mr2 mb2 grow">
    <a
      href={linkUrl}
      className="dib bg-black white ph3 pv1 link f5 ttu br2 fw3 pointer"
      target="_blank"
    >
      {linkName}
    </a>
  </li>;

export default CardMeaningLink;
