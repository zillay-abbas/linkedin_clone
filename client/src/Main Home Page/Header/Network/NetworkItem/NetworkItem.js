import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NetworkItem.css";

const NetworkItem = ({ico, text, number}) => {
  return (
    <div>
        <div className="network__item">
          <div className="network__icon">
            <FontAwesomeIcon icon={ico} />
          </div>
          <div className="item__text">{text}</div>
          <div className="item__count">{number}</div>
        </div>
    </div>
  )
}

export default NetworkItem