import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import {
  addItemAction,
  removeItemByIndexAction,
  setItemsAction,
} from '../../actions/layout';
import Tile from '../Tile';
import Button from '../Button';

import './TileLayoutMgr.css';

const ResponsiveGridLayout = WidthProvider(ReactGridLayout);

class TileLayoutMgr extends PureComponent {
  onAddTileClick = (e) => {
    e.preventDefault();
    this.props.addItem();
  }

  onLayoutChange = (items) => {
    this.props.setItems(items);
  }

  removeItemByIndex(index) {
    this.props.removeItemByIndex(index);
  }

  renderContent() {
    const { colCount, items, maxItems } = this.props;

    if (!items.length) {
      return (
        <div className="TileLayoutMgr-EmptyMessage">
          You don&apos;t have any tiles yet.&nbsp;
          <a href="#addtile" onClick={this.onAddTileClick}>Add one?</a>
        </div>
      );
    }

    return [
      <ResponsiveGridLayout
        cols={colCount}
        key="grid"
        layout={items}
        rowHeight={30}
        minH={30}
        onLayoutChange={this.onLayoutChange}
      >
        {items.map((item, i) => (
          <Tile key={item.i} onClose={() => this.removeItemByIndex(i)}>
            {item.i}
          </Tile>
        ))}
      </ResponsiveGridLayout>,
      items.length < maxItems &&
        <Button
          className="TileLayoutMgr-AddItem"
          key="add-another"
          onClick={this.onAddTileClick}
        >
          Add another
        </Button>,
    ];
  }

  render() {
    return (
      <div className="TileLayoutMgr">
        {this.renderContent()}
      </div>
    );
  }
}

TileLayoutMgr.defaultProps = {
  items: [],
};

TileLayoutMgr.propTypes = {
  addItem: PropTypes.func.isRequired,
  colCount: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  removeItemByIndex: PropTypes.func.isRequired,
  setItems: PropTypes.func.isRequired,
  maxItems: PropTypes.number.isRequired,
};

const mapStateToProps = ({ layout }) => ({
  colCount: layout.colCount,
  items: layout.items,
  maxItems: layout.maxItems,
});

const mapDispatchToProps = {
  addItem: addItemAction,
  removeItemByIndex: removeItemByIndexAction,
  setItems: setItemsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TileLayoutMgr);
