import { connect } from "react-redux";
import Cart from "../Components/Cart";
import { add, remove } from "../actions";

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { add, remove }
);

export default connectedComponent(Cart);
