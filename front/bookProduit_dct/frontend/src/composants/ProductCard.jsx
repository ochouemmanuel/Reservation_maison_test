import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-md-4">
      <div className="card p-3 mb-3">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5>{product.name}</h5>
          <p>{product.description}</p>
          <p>Prix: {product.price}€</p>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
