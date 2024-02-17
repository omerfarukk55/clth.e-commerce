import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

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
      
        {cartItems.map((cartItem) => (

          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>     
        )          
        )}
        <span className='Total'> Total: 0</span>
      
    </div>
  );
}

export default Checkout;
