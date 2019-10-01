import data from './data.json';
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const INITIAL_STATE = { products: data.products, cartItems: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = { ...action.payload };
      const id = Object.keys(newItem)[0];
      /*
      destructure newItem
      -if id exists, then increment count by one,
      else add newitem and key of count as 1
      */
      if (state.cartItems.hasOwnProperty(id)) {
        newItem[id].count = state.cartItems[id].count + 1;
        return { products: state.products, cartItems: { ...state.cartItems, ...newItem  } }
        
      } else {
        newItem[id].count = 1;
        return { products: state.products, cartItems: { ...state.cartItems, ...newItem  } }
      }

    case REMOVE_FROM_CART:
      const removeId = action.payload;
      if(state.cartItems.hasOwnProperty(removeId)) {
        const item = state.cartItems[removeId];

        if(item.count > 1) {
          item.count -= 1;
          let replaceItem = { [removeId]: {...item} }
          return { products: state.products, cartItems: {
            ...state.cartItems, ...replaceItem } }

        } else {
          let items = { ...state.cartItems };
          delete items[removeId];
          return { products: state.products, cartItems: {
            ...items
          }}
        }

      } else {
        return state;
      }

    default:
      return state;
  }
}

export default rootReducer;