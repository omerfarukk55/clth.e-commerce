import { Fragment, useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
 
import {signOutuser} from "../../utils/firebase/firebase.utils"

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
      await signOutuser();
      setCurrentUser(null)
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Alışveriş
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>Çıkış</span>
              ) : (<Link className="nav-link" to="/auth"> 
              Giriş
            </Link>
            )
          }
          
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
