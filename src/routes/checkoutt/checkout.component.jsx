import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const  Checkout = () => {
   const {cartItems,addItemToCart} = useContext(CartContext);
     

  return (
    <div>
      <h1>ı am checkout page</h1>
      <div>
       {cartItems.map((cartItem)=>{
        const {id,name,quantity} = cartItem;
        return (<div key={id}>
        <h2>{name}</h2>
        <span>{quantity}</span>
        <span >decrement</span><br/>
        <span onClick={()=>addItemToCart(cartItem)}>increment</span><br/>
        </div>);
    })}
      </div>
    </div>
  );
}

export default Checkout;