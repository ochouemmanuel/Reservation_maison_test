import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="container">
      <h2 className="my-4">Votre Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} - {item.price}€
              </li>
            ))}
          </ul>
          <Link to="/checkout" className="btn btn-success mt-3">
            Valider la commande
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
