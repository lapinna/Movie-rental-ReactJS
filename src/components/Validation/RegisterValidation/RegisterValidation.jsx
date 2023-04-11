const RegisterValidation = (values) => {
  let errors = {};

  const inputValues = Object.entries(values);

  function isValid(array) {
    array
      .map(isValidContent())
      .filter((elem) => elem !== null)
      .map(isValidLength())
      .filter((elem) => elem !== null)
      .map(isValidEmail())
      .filter((elem) => elem !== null)
      .map(isValidPassword())
      .filter((elem) => elem !== null);
  }

  function isValidContent() {
    return (elem) => {
      if (elem[1] === "") {
        errors[elem[0]] = `${capitalizeFirst(elem[0])} field must be filled`;
        return null;
      }
      return elem;
    };
  }

  function isValidLength() {
    return (elem) => {
      if ((elem[0] === "name" || elem[0] === "surname") && elem[1].length < 2) {
        errors[elem[0]] = `${capitalizeFirst(elem[0])} field should contain 2 or more letters`;
        return null;
      }
      return elem;
    };
  }

  function isValidEmail() {
    return (elem) => {
      const email1 = values.email1;
      const email2 = values.email2;
      if (elem[0] === "email1" || elem[0] === "email2") {
        if (!/\S+@\S+\.\S+/.test(elem[1])) {
          errors[elem[0]] = `Email is not valid`;
          return null;
        }
        if (email1 !== email2) {
          console.log("here", email1 !== email2);
          errors[elem[0]] = `Email field does not match`;
          return null;
        }
      }
      return elem;
    };
  }

  function isValidPassword() {
    return (elem) => {
      const password1 = values.password1;
      const password2 = values.password2;
      if ((elem[0] === "password1" || elem[0] === "password2") && elem[1].length < 8) {
        if (password1 !== password2) {
          errors[elem[0]] = `Password field does not match`;
          return null;
        }
        errors[elem[0]] = `${capitalizeFirst(elem[0])} field should contain 8 or more letters`;
        return null;
      }
      return elem;
    };
  }

  function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  isValid(inputValues);

  return errors;
};

export default RegisterValidation;
