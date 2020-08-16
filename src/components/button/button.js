import React from 'react';
import './button.scss';

export default function Button({ buttonType, buttonText }) {
  return (
    <React.Fragment>
      {/* <button className="filter-block__btn">Search</button> */}
      <button className={buttonType}>{buttonText}</button>
    </React.Fragment>
  );
}
