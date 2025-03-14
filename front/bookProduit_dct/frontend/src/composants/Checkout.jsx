import { useState } from "react";
import "../css/Checkout.css"


const CheckoutForm = ({ cart, clearCart }) => {
  const [name, setName] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const orderData = {
      customer_name: name,
      items: cart.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) throw new Error("Erreur lors de la commande");

      alert("Commande réussie !");
      clearCart();
    } catch (error) {
      console.error(error);
      alert("Échec de la commande");
    }
  };

  return (
    <div>
      

        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Finaliser la commande</h2>
                <input type="text" placeholder="Nom complet" value={name} onChange={(e) => setName(e.target.value)} required />
 
                <button type="submit">Commander</button>
            </form>
        </div>
    
      
    </div>
  );
};

export default CheckoutForm;
