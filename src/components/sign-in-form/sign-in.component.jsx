import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form.input.component";
import "./sign-in-form.scss";
import Button from "../button/button.component";


const defaultFormFields = {
 
  email: "",
  password: "",

};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const {  email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault(); // Etkinlik nesnesini almak için fonksiyon parametresini ekledik
    
    try {
      resetFormFields();
      console.log("User created successfully");
    } catch (error) {
     
    }
  };
  const signInWithGoogle = async()=>{
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <span>Already have an account </span>
      <h2>Sign in with your email and password</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
        label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
        label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <Button  type="submit">Sign In</Button>
       
      </form>
      <Button  oneClick = {signInWithGoogle}>Google Sign In</Button>
    </div>
  );
};
export default SignInForm;
