import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [ signInStatusName, setSignInStatusName ] = useState("Sign In")
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={ LOGO_URL }
        />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-list-item">Search</li>
          <li className="nav-list-item">Offers</li>
          <li className="nav-list-item">Help</li>
          <li className="nav-list-item" onClick={() => {
            signInStatusName === "Sign In" ? setSignInStatusName('Sign Out') : setSignInStatusName('Sign In');
          }}>{ signInStatusName }</li>
          <li className="nav-list-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;