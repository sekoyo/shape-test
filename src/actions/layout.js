// https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id
function guidGenerator() {
  const S4 = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

const addItemAction = item => (dispatch, getStore) => {
  if (item) {
    dispatch({ type: 'LayoutAddItem', item });
    return;
  }

  const {
    layout: { colCount, items },
  } = getStore();

  // Todo: a more sophisticated algo which finds the closest large
  // enough area to the top left point.
  const newItem = {
    i: guidGenerator(),
    x: items.length % 2 === 1 ? colCount - 6 : 0,
    y: Infinity,
    w: 6,
    h: 4,
  };

  dispatch({ type: 'LayoutAddItem', item: newItem });
};

const removeItemByIndexAction = index => ({
  type: 'LayoutRemoveItemByIndex',
  index,
});

const setItemsAction = items => ({
  type: 'LayoutSetItems',
  items,
});

export {
  addItemAction,
  removeItemByIndexAction,
  setItemsAction,
};

export default null;
