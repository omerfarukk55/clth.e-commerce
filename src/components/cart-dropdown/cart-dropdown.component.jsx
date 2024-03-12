import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

import React from "react";
import Button ,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import  {CartDropdownContainer, CartItemcontent , emptyMesage} from "./cart-dropdown.style";
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
        ))):<emptyMesage> sepetiniz boştur   </emptyMesage>
      }
      </ CartItemcontent>
      <Button  onClick={goToCheckouthandler}> SEPETİ KONTROL ET </Button>
    </CartDropdownContainer>
  );
  
};

export default CartDropdown;
