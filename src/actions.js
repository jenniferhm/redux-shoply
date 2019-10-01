import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export function add(item) {
  return {
    type: ADD_TO_CART,
    payload: item
  };
}

export function remove() {
  return {
    type: REMOVE_FROM_CART
  };
}
