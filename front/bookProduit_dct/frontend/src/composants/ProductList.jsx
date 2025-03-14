import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/produits")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erreur :", error));
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Produits disponibles</h2>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
