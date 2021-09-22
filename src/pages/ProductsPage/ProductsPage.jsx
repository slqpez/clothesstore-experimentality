import React, { useState, useEffect } from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import useProducts from "../../hooks/useProducts";
import { useParams, useHistory } from "react-router-dom";
import productsPageStyles from "./productsPage.module.css";

function ProductsPage() {
  const [offset, setOffset] = useState(0);

  const { search } = useParams();
  const history = useHistory();
  if (!search) {
    history.push("/products/vestido-from-0");
  }

  useEffect(() => {
    setOffset(search ? Number(search.split("-")[2]) : 0);
  }, [search]);

  const searchProduct = search ? search.split("-")[0] : "vestido";

  const { products, loading, error } = useProducts(searchProduct, offset);

  if (loading)
    return <p className={productsPageStyles.infoPage}>Cargando productos...</p>;

  if (products.length === 0)
    return (
      <p className={productsPageStyles.infoPage}>
        No se encontraron productos para esa búsqueda.
      </p>
    );
    
  const handlePrev = () => {
    setOffset((o) => o - 20);
    history.push(`/products/${searchProduct}-from-${offset - 20}`);
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    setOffset((o) => o + 20);
    history.push(`/products/${searchProduct}-from-${offset + 20}`);
    window.scrollTo(0, 0);
  };

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
