const types = {
  fetchProducts: "FETCH_PRODUCTS",
  addProductToCart: "ADD_PRODUCT_TO_CART",
  fetchCartProducts: "FETCH_CART_PRODUCTS",
  deleteProductFromCart: "DELETE_PRODUCT_FROM_CART",
  editQuantity: "EDIT_QUANTITY",
  deleteAllProductsFromCart: "DELETE_ALL_PRODUCTS_FROM_CART",
};

const initialProducts = {
  products: [],
  cartProducts: [],
};

const productsReducer = (state, action) => {
  switch (action.type) {
    case types.fetchProducts:
      return {
        ...state,
        products: action.payload,
      };

    case types.addProductToCart:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };

    case types.fetchCartProducts:
      return {
        ...state,
        cartProducts: action.payload,
      };

    case types.deleteProductFromCart:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(product=>product.id !== action.payload)
      };

    case types.deleteAllProductsFromCart:
      return {
        ...state,
        cartProducts: [],
      };

    default:
      return state;
  }
};

export { initialProducts, types };
export default productsReducer;
