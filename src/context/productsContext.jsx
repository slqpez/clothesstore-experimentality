import React,{createContext, useReducer} from "react"
import productsReducer,{initialProducts} from "./productsReducer"

const ProductsContext = createContext()

const ProductsProvider =({children})=>{
  const [products, dispatch] = useReducer(productsReducer, initialProducts)

  return(
    <ProductsContext.Provider value={[products, dispatch]}>
      {children}
    </ProductsContext.Provider>
  )
}

export {ProductsContext}
export default ProductsProvider