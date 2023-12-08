import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form.input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);
    const handleSubmit = async(event) => {
        event.preventDefault(); // Etkinlik nesnesini almak için fonksiyon parametresini ekledik
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

            console.log("User created successfully");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("cannot create user,email already in use");
            } else {
                console.log("User creation encountered an error", error);
            }
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value });
    };
    return ( <
        div className = "sign-up-container" >
        <
        h2 > Don 't have an account?</h2> <
        span > Sign up with your email and password < /span> <
        form onSubmit = { handleSubmit } >

        <
        FormInput label = "Display Name"
        type = "test"
        required onChange = { handleChange }
        name = "displayName"
        value = { displayName }
        />


        <
        FormInput label = "Email"
        type = "email"
        required onChange = { handleChange }
        name = "email"
        value = { email }
        />


        <
        FormInput label = "Password"
        type = "password"
        required onChange = { handleChange }
        name = "password"
        value = { password }
        /> <
        FormInput label = "Confirm Password"
        type = "password"
        required onChange = { handleChange }
        name = "confirmPassword"
        value = { confirmPassword }
        /> <
        Button type = "submit" > kayıt ol < /Button> <
        /form> <
        /div>
    );
};
export default SignUpForm;