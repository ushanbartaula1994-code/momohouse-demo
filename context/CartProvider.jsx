import { createContext, useEffect, useReducer } from "react";
export const CartContext = createContext();
const getItem = () => {
  let res = localStorage.getItem("cart");
  return res ? JSON.parse(res) : [];
};

const initialState = {
  cartItem: getItem(),
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      //   todo
      // -Get all product
      // -check  that product exist or not in cart
      // -if found , increase qty  or do not do any things
      // -if not ,
      // 1. add qty key and default value (1)
      // 2. add that new product to the cart
      // -then return new cart item
      const isExist = state.cartItem.find((item) => {
        return item.id == action.payload.id;
      });

      if (isExist) {
        alert("Product is Already in  cart");

        return state;
      } else {
        const newProduct = { ...action.payload, qty: 1 };
        const newCartItem = [...state.cartItem, newProduct];

        alert("Product is added to cart");
        return {
          cartItem: newCartItem,
        };
      }
    }

    case "Increment": {
      // todo
      // get id of that product
      // then find that product in cart item
      // if found then increase qty

      let newCartItem = state.cartItem.map((item) => {
        return item.id == action.payload.id
          ? { ...item, qty: item.qty + 1 }
          : item;
      });

      return {
        cartItem: newCartItem,
      };
    }

    case "Decrement": {
      let newCartItem = state.cartItem.map((item) => {
        return item.id == action.payload.id && item.qty>1
          ? { ...item, qty: item.qty - 1 }
          : item;
      });

      return {
        cartItem: newCartItem,
      };
    }

    case "Delete": {
      // todo 
      // get id 
      // filterout 
      // then return that new cartItem
      const newCartItem=state.cartItem.filter((item)=>{
        return item.id!==action.payload.id
      })
      return {
        cartItem:newCartItem
      };
    }

    case "ClearCart": {
      
      return {cartItem:[]};
    }
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItem));
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};