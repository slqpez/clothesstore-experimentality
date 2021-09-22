import React, { useState } from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import useProducts from "../../hooks/useProducts";
import { useParams, useHistory} from "react-router-dom";
import productsPageStyles from "./productsPage.module.css";

function ProductsPage() {
  const [offset, setOffset] = useState(0);

  const { search } = useParams();
  const history = useHistory()
  const searchProduct = search.split("-")[0];
  const { products, loading, error } = useProducts(searchProduct, offset);

  if (loading) return <p>Cargando productos...</p>;

  if (products.length === 0)
    return <p>No se encontraron productos para esa búsqueda.</p>;

  const handlePrev = () => {
    setOffset((o) => o - 20);
    history.push(`/products/${searchProduct}-from-${offset - 20}`);
    window.scrollTo(0, 0)
  };

  const handleNext = () => {
    setOffset((o) => o + 20);
    history.push(`/products/${searchProduct}-from-${offset + 20}`);
    window.scrollTo(0, 0)
  };

  console.log(offset)

  return (
    <div className={productsPageStyles.productsPageContainer}>
      <ProductsList products={products} />
      <div className={productsPageStyles.btnsContainer}>
        {offset === 0 ? null : (
          <button
            className={`${productsPageStyles.btnsPagination} ${productsPageStyles.btnPrev}`}
            onClick={handlePrev}
          >
            Anterior
          </button>
        )}
        <button
          className={`${productsPageStyles.btnsPagination} ${productsPageStyles.btnNext}`}
          onClick={handleNext}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default ProductsPage;
