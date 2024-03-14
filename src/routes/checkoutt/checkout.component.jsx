import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartTotal} = useContext(CartContext);

  return (
    <CheckoutContainer>
    <CheckoutHeader>
     <HeaderBlock>
       <span>Ürün</span>
     </HeaderBlock>
     <HeaderBlock>
     <span>Acıklama</span>
     </HeaderBlock>
     <HeaderBlock>
     <span>Adet</span>
     </HeaderBlock>
     <HeaderBlock>
     <span>fiyat</span>
     </HeaderBlock>
     <HeaderBlock>
     <span>ürünü sil</span>
     </HeaderBlock>
    </CheckoutHeader>
      
        {cartItems.map((cartItem) => (

          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>     
        )          
        )}
          <Total> Total: ${cartTotal} </Total>
    </CheckoutContainer>
  );
}

export default Checkout;
