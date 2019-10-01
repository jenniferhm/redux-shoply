import { connect } from "react-redux";
import StoreList from "../Components/StoreList";
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

export default connectedComponent(StoreList);
