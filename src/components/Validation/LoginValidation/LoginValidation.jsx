const LoginValidation = (loginInformation) => {
  let errors = {};

  function validateLogin() {
    const users = JSON.parse(localStorage.getItem("users"));
    const isRegistered = users.find(
      (user) => user.email1 === loginInformation.email
    );

    if (!isRegistered) {
      errors.email = "Invalid data";
    } else {
      if (isRegistered.password1 === loginInformation.password) {
        alert("Login success");
      } else {
        errors.password = "Incorrect password";
      }
    }

    if (loginInformation.email === "") {
      errors.email = "Email field must be filled";
    }
    if (loginInformation.password === "") {
      errors.password = "Password field must be filled";
    }
  }
  validateLogin();
  return errors;
};

export default LoginValidation;
