import "./LoginForm.style.scss";
import { useState } from "react";
import LoginValidation from "../../Validation/LoginValidation/LoginValidation";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

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
    if (Object.keys(validationErrors).length === 0) {
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
