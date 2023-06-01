import "./RegisterForm.style.scss";
import { useState } from "react";
import RegisterValidation from "../../Validation/RegisterValidation/RegisterValidation";

const RegisterForm = () => {
  const initialState = {
    name: "",
    surname: "",
    email1: "",
    email2: "",
    password1: "",
    password2: "",
  };

  const [values, setValues] = useState(initialState);
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(true);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = RegisterValidation(values);
    if (Object.keys(validationErrors).length === 0) {
      const addUser = (newUser) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = [...users, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      };
      addUser(values);
      alert("Registration successful! Please Login!");
      setValues(initialState);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <button className="register-btn" onClick={handleClick} style={{display: isShown ? 'none':'block' }}>
        Register
      </button>
      {isShown ? (
        <div className="form-container">
          <form className="register-form">
            <div>
              <label htmlFor="name">
                Name
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="name"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </label>
            </div>
            <div>
              <label htmlFor="surname">
                Surname
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder="surname"
                  value={values.surname}
                  onChange={handleChange}
                />
                {errors.surname && <p className="error">{errors.surname}</p>}
              </label>
            </div>
            <div>
              <label htmlFor="email1">
                Email
                <input
                  id="email1"
                  name="email1"
                  type="email"
                  placeholder="email"
                  value={values.email1}
                  onChange={handleChange}
                />
                {errors.email1 && <p className="error">{errors.email1}</p>}
              </label>
            </div>
            <div>
              <label htmlFor="email2">
                Email again
                <input
                  id="email2"
                  name="email2"
                  type="email"
                  placeholder="email"
                  value={values.email2}
                  onChange={handleChange}
                />
                {errors.email2 && <p className="error">{errors.email2}</p>}
              </label>
            </div>
            <div>
              <label htmlFor="password1">
                Password
                <input
                  id="password1"
                  name="password1"
                  type="password"
                  placeholder="password"
                  value={values.password1}
                  onChange={handleChange}
                />
                {errors.password1 && (
                  <p className="error">{errors.password1}</p>
                )}
              </label>
            </div>
            <div>
              <label htmlFor="password2">
                Password again
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  placeholder="password"
                  value={values.password2}
                  onChange={handleChange}
                />
                {errors.password2 && (
                  <p className="error">{errors.password2}</p>
                )}
              </label>
            </div>
          </form>
          <button
            className="register-btn"
            type="submit"
            onClick={handleFormSubmit}
          >
            Register
          </button>
        </div>
      ) : null}
    </>
  );
};

export default RegisterForm;
