import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Cart.scss";

export default function Cart(props) {
  const [cart, setCart] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getCart = async function () {
      const res = await Axios.get(`/api/carts/${params.id}`);
      setCart(res.data);
    };
    if (params.id) getCart();
  }, [params.id]);

  return (
    <main className="cart-container">
      {cart ? (
        <div className="cart-card">
          <table className="cart-table">
            <tr>
              <th></th>
              <th>Aisle</th>
              <th>Amount</th>
              <th>Name</th>
            </tr>
            {cart.map((item) => (
              <tr>
                <td>
                  <img src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt="Item" />
                </td>
                <td>{item.aisle}</td>
                <td>
                  {item.amount} {item.measure}
                </td>
                <td>{item.name}</td>
              </tr>
            ))}
          </table>
        </div>
      ) : (
        <h1>Loading cart, this might take a while...</h1>
      )}
    </main>
  );
}
