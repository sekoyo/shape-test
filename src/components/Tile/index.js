import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IconButton from '../Button/IconButton';
import close from './close.svg';

import './Tile.css';

const Tile = ({
  className,
  children,
  onClose,
  ...otherProps
}) => (
  <div className={classnames('Tile', className)} {...otherProps}>
    <IconButton className="Tile-CloseButton" onClick={onClose}>
      <img className="Tile-CloseIcon" alt="close" src={close} />
    </IconButton>
    <div className="Tile-Header">
      Tile
    </div>
    <div className="Tile-Body">
      {children}
    </div>
  </div>
);

Tile.defaultProps = {
  className: undefined,
};

Tile.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Tile;
