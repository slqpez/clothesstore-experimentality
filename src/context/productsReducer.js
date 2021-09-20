const types = {
  fetchProducts: "FETCH_PRODUCTS",
};

const initialProducts = {
  products: [],
};

const productsReducer = (state, action) => {
  switch (action.type) {
    case types.fetchProducts:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};

export { initialProducts, types };
export default productsReducer;
