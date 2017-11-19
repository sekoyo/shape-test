import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from '../../utils/configureStore';
import TileLayoutMgr from './index';

const component = store => <Provider store={store}><TileLayoutMgr /></Provider>;

describe('TileLayoutMgr', () => {
  it('should show an empty message if there are no items', () => {
    const store = configureStore({
      layout: {
        colCount: 12,
        maxItems: 5,
        items: [],
      },
    });
    const wrapper = mount(component(store));
    const hasEmptyMsg = wrapper.find('.TileLayoutMgr-EmptyMessage').exists();
    expect(hasEmptyMsg).toBe(true);
  });

  describe('Add more button', () => {
    const layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 2 },
      { i: 'b', x: 1, y: 0, w: 3, h: 2 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    ];

    it('should render an add more button if items < maxItems', () => {
      const store = configureStore({
        layout: {
          colCount: 12,
          maxItems: 5,
          items: layout,
        },
      });
      const wrapper = mount(component(store));
      const hasAddMoreBtn = wrapper.find('.TileLayoutMgr-AddItem').exists();
      expect(hasAddMoreBtn).toBe(true);
    });

    it('should NOT render an add more button if items >= maxItems', () => {
      const store = configureStore({
        layout: {
          colCount: 12,
          maxItems: 3,
          items: layout,
        },
      });
      const wrapper = mount(component(store));
      const hasAddMoreBtn = wrapper.find('.TileLayoutMgr-AddItem').exists();
      expect(hasAddMoreBtn).toBe(false);
    });
  });
});
