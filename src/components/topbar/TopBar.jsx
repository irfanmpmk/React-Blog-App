import { Link } from "react-router-dom";
import "./topbar.css";

const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/React-Node-Blog-App">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/React-Node-Blog-App">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/React-Node-Blog-App">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user ? (
            <li className="topListItem">
              <Link className="link" to="/React-Node-Blog-App">
                LOGOUT
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://img.freepik.com/free-photo/unrecognizable-asian-woman-sitting-cafe-working-laptop_1098-17167.jpg?w=996&t=st=1694797669~exp=1694798269~hmac=b72a4365774d1543868a22d77f9eddb81902fc84e950ce4cba5c165cc360e61b"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                {" "}
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                {" "}
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
