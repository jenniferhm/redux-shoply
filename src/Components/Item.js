import React from 'react';

class Item extends React.Component {
  render() {
    const {name, price} = this.props.item;
    return (
      <div className="item">
        <h4>{name}</h4>
        <p>${price}</p>
        <button onClick={this.props.add}>Add to Cart</button>
        <button onClick={this.props.remove}>Remove from Cart</button>
      </div>
    )
  }
}

export default Item;