import React from 'react';

import './index.scss';

type ButtonProps = {
  caption: string;
  cssClass: string;
};

const Button = ({ caption, cssClass }: ButtonProps) => (
  <>
    <button className={cssClass}>{caption}</button>
  </>
);

export default Button;
