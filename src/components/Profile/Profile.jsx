import "./Profile.style.scss";
import profileIcon from "../../assets/profile-icon.png";
import { useState } from "react";

const Profile = ({ contentHeader }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  let userName = user.userName;
  let userSurname = user.userSurname;
  let initialUserEmail = user.userEmail;

  const [userEmail, setUserEmail] = useState(initialUserEmail);

  const handleClick = () => {
    function resetEmail() {
      let newUserEmail = prompt("Your new email:");
      validateEmail(newUserEmail);
    }
    resetEmail();

    function validateEmail(input) {
      const validRegex = /\S+@\S+\.\S+/;
      const valid = validRegex.test(input);
      if (valid) {
        alert("Email address changed");
        const newEmail = input;
        setUserEmail(newEmail);
      } else {
        alert("Email not valid!");
      }
    }
  };

  return (
    <div className="content-container">
      <h1>{contentHeader}</h1>
      <div>
        <div className="profile-summary">
          <div className="profile-picture">
            <img src={profileIcon} alt="profile icon" />
          </div>
          <div className="profile-details">
            <p>
              <b>Name:</b> <span id="profile-name">{userName}</span>
            </p>
            <p>
              <b>Surname:</b> <span id="profile-surname">{userSurname}</span>
            </p>
            <p>
              <b>Email:</b> <span id="profile-email">{userEmail}</span>
            </p>
          </div>
        </div>
        <div className="profile-button-container">
          <button id="reset-password">Reset password</button>
          <button id="reset-email" onClick={() => handleClick()}>
            Reset email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
