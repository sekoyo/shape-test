import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Button.css';

const Button = ({
  children,
  className,
  ...otherProps
}) => (
  <button
    className={classnames('Button', className)}
    {...otherProps}
  >
    {children}
  </button>
);

Button.defaultProps = {
  children: null,
  className: null,
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

export default Button;
