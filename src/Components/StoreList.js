import React from 'react';
import Item from './Item';

class StoreList extends React.Component {
  countItems() {
    let cart = this.props.cartItems;
    let count = 0;
    let items = Object.values(cart);
    for(let item of items) {
      count += item.count
    }
    return count;
  }

  render() {
    const { products, add, remove } = this.props;
    return (
      <div>
        <h4>Shopping Cart has {this.countItems()} items in it.</h4>
        {Object.entries(products).map(([k, v]) => (
          <Item id={k} item={v} key={k} add={() => add({[k]: products[k]})} remove={() => remove(k)} />
        ))}

      </div>
    )
  }
}

export default StoreList;