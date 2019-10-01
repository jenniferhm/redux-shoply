import { connect } from "react-redux";
import ItemDetails from "../Components/ItemDetails";
import { add, remove } from "../actions";

function mapStateToProps(state) {
  return {
    products: state.products,
    cartItems: state.cartItems
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { add, remove }
);

export default connectedComponent(ItemDetails);
