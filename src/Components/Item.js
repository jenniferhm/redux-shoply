import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component {
  render() {
    let { name, price, count } = this.props.item;
    return (
      <div className="item">
        <Link to={`/products/${this.props.id}`}>
          <div>
            <h4>{name}</h4>
            <p>${price}</p>
          </div>
        </Link>
        <p>You have {count || 0} {name}'s in your cart.</p>
        <button onClick={this.props.add}>Add to Cart</button>
        <button onClick={this.props.remove}>Remove from Cart</button>
      </div>
    )
  }
}

export default Item;