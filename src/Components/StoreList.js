import React from 'react';
import Item from './Item';
import {Link} from 'react-router-dom';

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
    const { products, add, remove, cartItems } = this.props;
    console.log(cartItems);
    let items = Object.entries(products).map(([k, v]) => {
      if (cartItems[k]) {
        return (
          <Item
            id={k}
            item={cartItems[k]}
            key={k}
            add={() => add({[k]: {...products[k]} })}
            remove={() => remove(k)}
          />
        )
      } else {
        return (
          <Item
            id={k}
            item={v}
            key={k}
            add={() => add({[k]: {...products[k]} })}
            remove={() => remove(k)}
          />
        );
      }
    });

    return (
      <div>
        <h4>Shopping Cart has {this.countItems()} items in it.</h4>
        <Link to="/cart"><button>Cart</button></Link>
        {items}
      </div>
    )
  }
}

export default StoreList;