import { useContext } from 'react';
import React from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import {ProductCartContainer,Footer,Name,price} from "./product-card.style.jsx";

const ProductCard = ({ product }) => {
    const {name, price,imageUrl} = product;
    const  {addItemToCart} = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCartContainer>
      
      <img src={imageUrl} alt={`${name}`} />

      <Footer>
      <Name>{name}</Name>
      <price>{price}</price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>sepete ekle</Button>
    </ProductCartContainer>
  )
}

export default ProductCard
