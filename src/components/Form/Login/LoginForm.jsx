import "./LoginForm.style.scss";
import { useState } from "react";
import LoginValidation from "../../Validation/LoginValidation/LoginValidation";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState(() => {
    const updatedUsers = JSON.parse(localStorage.getItem("users"));
    return updatedUsers || [];
  });

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const currentUserValues = users.find(
    (user) => user.email1 === loginValues.email
  );

  const [yourMovies, setYourMovies] = useState(() => {
    const updatedYourMovies = JSON.parse(localStorage.getItem("yourMovies"));
    return updatedYourMovies || [];
  });

  const handleChange = (e) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const emails = users.map((elem) => elem.email1);
  const passwords = users.map((elem) => elem.password1);

  const registeredEmail = emails.filter((elem) => elem === loginValues.email);
  const registeredPassword = passwords.filter(
    (elem) => elem === loginValues.password
  );

  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = LoginValidation(loginValues);
    if (Object.keys(validationErrors).length === 0) {
      if (registeredEmail && registeredPassword) {
        const currentUser = {
          userName: currentUserValues.name,
          userSurname: currentUserValues.surname,
          userEmail: currentUserValues.email1,
          userPassword: currentUserValues.password1,
          userMovies: yourMovies
        }
        localStorage.setItem("user", JSON.stringify(currentUser))
        navigate("/home");
      } else {
        alert("NOT register user");
      }
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
