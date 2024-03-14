import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

import React from "react";
import Button  from "../button/button.component";
import  {CartDropdownContainer, CartItemcontent , EmptyMesage} from "./cart-dropdown.style";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckouthandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItemcontent>
        {cartItems.length ? (cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))):<EmptyMesage> sepetiniz boştur   </EmptyMesage>
      }
      </ CartItemcontent>
      <Button  onClick={goToCheckouthandler}> SEPETİ KONTROL ET </Button>
    </CartDropdownContainer>
  );
  
};

export default CartDropdown;
