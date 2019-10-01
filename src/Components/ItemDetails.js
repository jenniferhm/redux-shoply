import React from 'react';

class ItemDetails extends React.Component {
  render() {
    const id = this.props.match.params.id;
    let {name, price, description, image_url} = this.props.products[id];
    return (
      <div className="item-details">
        <h4>{name}</h4>
        <p>${price}</p>
        <p>{description}</p>
        <img src={image_url} alt="PRODUCT" />
        <button onClick={() => this.props.add({[id]: {name, price, description, image_url}})}>Add to Cart</button>
        <button onClick={() => this.props.remove(id)}>Remove from Cart</button>
      </div>
    )
  }
}

export default ItemDetails;