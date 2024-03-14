import { useState } from "react";
import FormInput from "../form-input/form.input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";



import {
  
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { SıgnIn, ButtonContainer } from "./sign-in-form";


const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  
  // UserContext, UserContext'inizin adı olarak varsayılan olarak kullanıldıysa değiştirilebilir

  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Etkinlik nesnesini almak için fonksiyon parametresini ekledik
    
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
        );
    resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          resetFormFields();
          alert("yanlış şifre");
          break;
        case "auth/invalid-login-credentials":
          resetFormFields();  
        alert("kullanıcı bulunamadı");
          break;
        default:
          resetFormFields();
          console.log(error);
          
      }
    }
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SıgnIn>
      <span>Hesabınız zaten var mı </span>
      <h2>Email ve Şifre ile Giriş yapınız </h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonContainer>
          <Button type="submit">giriş</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google}onClick={signInWithGoogle}>
            GOOGLE İLE GİRİŞ
          </Button>
        </ButtonContainer>
      </form>
    </SıgnIn>
  );
};
export default SignInForm;
