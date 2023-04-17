import "./LoginForm.style.scss";
import { useState } from "react";
import LoginValidation from "../../Validation/LoginValidation/LoginValidation";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users"))
  const [currentUser, setCurrentUser] = useState([]);

  const emails = users.map((elem) => elem.email1);
  const passwords = users.map((elem) => elem.password1);

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const registeredEmail = emails.filter((elem) => elem === loginValues.email);
  const registeredPassword = passwords.filter(
    (elem) => elem === loginValues.password
  );

  const handleChange = (e) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = LoginValidation(loginValues);
    if (
      Object.keys(validationErrors).length === 0 &&
      registeredEmail &&
      registeredPassword
    ) {
      setCurrentUser(
        ...currentUser,
        localStorage.setItem("user", JSON.stringify(loginValues)),
        );
      navigate("/home");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <form className="login-form">
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            value={loginValues.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={loginValues.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
      </form>
      <button id="login-btn" type="submit" onClick={handleLogin}>
        Sign in
      </button>
    </div>
  );
};

export default LoginForm;
