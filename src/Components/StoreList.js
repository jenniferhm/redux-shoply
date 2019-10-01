import React from 'react';
import Item from './Item';

class StoreList extends React.Component {
  render() {
    const { products, add, remove } = this.props;
    return (
      <div>
        {Object.entries(products).map(([k, v]) => (
          <Item id={k} item={v} key={k} add={() => add({[k]: products[k]})} remove={() => remove({[k]: products[k]})} />
        ))}

      </div>
    )
  }
}

export default StoreList;