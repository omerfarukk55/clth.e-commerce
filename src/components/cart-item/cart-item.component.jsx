import React from 'react';


import "./cart-item.style.scss";



 const CartItem = ({cartItem}) => {

    const {name,price,image,quantity} = cartItem;
  return (
    <div>
    <h2>
    {name}
    </h2>
    <span>{quantity}</span>
    </div>
  )
}
export default CartItem