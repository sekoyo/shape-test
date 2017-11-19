import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './IconButton.css';

const IconButton = ({
  children,
  className,
  size,
  ...otherProps
}) => (
  <button
    className={classnames(`IconButton IconButton--${size}`, className)}
    {...otherProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  children: null,
  className: null,
  size: 'small',
};

IconButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
};

export default IconButton;
