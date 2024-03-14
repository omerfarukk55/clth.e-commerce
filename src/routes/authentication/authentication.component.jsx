import { AuthenticationContainer } from "./authentication.styles";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in.component";
const Authentication = () => {
 
  return (
    <AuthenticationContainer>
      <SignInForm/>
      <SignUpForm/>
    </AuthenticationContainer>
  );
};

export default Authentication;