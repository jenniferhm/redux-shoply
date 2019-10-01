import data from './data.json';
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const INITIAL_STATE = { products: data.products, cartItems: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const id = Object.keys(action.payload)[0];
      let newItem = { [id]: {...action.payload[id]} };

      /*
      destructure newItem
      -if id exists, then increment count by one,
      else add newitem and key of count as 1
      */
      if (state.cartItems.hasOwnProperty(id)) {
        newItem = {
          [id]: {
            ...newItem[id],
            count: state.cartItems[id].count + 1
          }
        };        
      } else {
        newItem[id].count = 1; 
      }
      return { ...state, cartItems: { ...state.cartItems, ...newItem  } }

    case REMOVE_FROM_CART:
      const removeId = action.payload;
      if(state.cartItems.hasOwnProperty(removeId)) {
        let item = {...state.cartItems[removeId]};

        if(item.count > 1) {
          item.count -= 1;
          let replaceItem = { [removeId]: {...item} }
          return {
            ...state,
            cartItems: {
              ...state.cartItems, ...replaceItem
            }
          };

        } else {
          console.log("removing last key");
          let items = { ...state.cartItems };
          delete items[removeId];
          return { 
            ...state,
            cartItems: {
              ...items
            }
          };
        }

      } else {
        return state;
      }

    default:
      return state;
  }
}

export default rootReducer;