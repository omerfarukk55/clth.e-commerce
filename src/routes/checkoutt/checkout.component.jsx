import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);

  return (
    <div className='checkout-container'>
    <div className='checkout-header'>
     <div className='header-block'>
       <span>Ürün</span>
     </div>
     <div className='header-block'>
     <span>Acıklama</span>
     </div>
     <div className='header-block'>
     <span>Adet</span>
     </div>
     <div className='header-block'>
     <span>fiyat</span>
     </div>
     <div className='header-block'>
     <span>ürünü sil</span>
     </div>
    </div>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br/>
              <span onClick={()=>removeItemToCart(cartItem)}>decrement</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
              <br />
            </div>
          );
        })}
        <span className='Total'> Total: 0</span>
      </div>
    </div>
  );
}

export default Checkout;
