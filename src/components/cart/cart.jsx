import React from "react";
import "./cart.css";
import Button from "../button/button";
import { totalPrice } from "../../utils/total-price";

const Cart = ({ cartItems, onCheckout }) => {
  return (
    <div className="cart__container">
      <p>
        Umumiy narx:
        {totalPrice(cartItems).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <Button
        title={`${cartItems.length === 0 ? "Buyurtma berish" : "To'lov"}`}
        type="checkout"
        disable = {cartItems.length === 0  ? true : false}
        onClick = {onCheckout}
      />
    </div>
  );
};

export default Cart;
