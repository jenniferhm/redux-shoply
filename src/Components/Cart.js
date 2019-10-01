import React from 'react';
import Item from './Item';

class Cart extends React.Component {
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
    const { cartItems, add, remove } = this.props;
    return (
      <div>
        <button onClick={() => this.props.history.push("/")}>Continue Shopping</button>
        <h4>Shopping Cart has {this.countItems()} items in it.</h4>
        {Object.entries(cartItems).map(([k, v]) => (
          <Item id={k} item={v} key={k} add={() => add({[k]: cartItems[k]})} remove={() => remove(k)} />
        ))}
      </div>
    )
  }
}

export default Cart;