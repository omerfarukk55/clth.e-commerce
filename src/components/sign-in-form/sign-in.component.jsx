import { useState } from "react";
import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
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
    const { email, password } = formFields;

    const handleSubmit = async(event) => {
        event.preventDefault(); // Etkinlik nesnesini almak için fonksiyon parametresini ekledik

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case ('auth/wrong-password'):
                    alert('yanlış şifre');
                case ('auth/invalid-login-credentials'):
                    alert('kullanıcı bulunamadı');
                default:
                    console.log(error);
            }
        }
    };
    const signInWithGoogle = async() => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value });
    };
    return ( <
        div className = "sign-in-container" >
        <
        span > Already have an account < /span> <
        h2 > Sign in with your email and password < /h2> <
        form onSubmit = { handleSubmit } >
        <
        FormInput label = "Email"
        type = "email"

        onChange = { handleChange }
        name = "email"
        value = { email }
        /> <
        FormInput label = "Password"
        type = "password"

        onChange = { handleChange }
        name = "password"
        value = { password }
        /> <
        div className = "buttons-container" >
        <
        Button type = "submit" > giriş < /Button> <
        Button buttonType = 'google'
        onClick = { signInWithGoogle } > Google Sign In < /Button> <
        /div> <
        /form> <
        /div>
    );
};
export default SignInForm;