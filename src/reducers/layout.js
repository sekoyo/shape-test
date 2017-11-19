import { local } from '../utils/storage';

export default function layout(state = {
  colCount: 12,
  items: local.get('layout', []),
  maxItems: 5,
}, action) {
  switch (action.type) {
    case 'LayoutAddItem': {
      const items = [...state.items, action.item];
      local.set('layout', items);
      return {
        ...state,
        items,
      };
    }
    case 'LayoutRemoveItemByIndex': {
      const items = state.items.filter((item, i) => i !== action.index);
      local.set('layout', items);
      return {
        ...state,
        items,
      };
    }
    case 'LayoutSetItems': {
      const { items } = action;
      local.set('layout', items);
      return {
        ...state,
        items,
      };
    }
    default:
      return state;
  }
}
