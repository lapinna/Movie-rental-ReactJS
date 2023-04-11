const RegisterValidation = (values) => {
  let errors = {};
  console.log("values", values);

  const inputValues = Object.entries(values);

  function isValid(array) {
    array
      .map(isValidContent())
      .filter((elem) => elem !== null)
      .map(isValidLength())
      .filter((elem) => elem !== null)
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
      if ((elem[0] === "name" || elem[0] === "surname") &&
        elem[1].length < 2) {
        errors[elem[0]] = `${capitalizeFirst(
          elem[0]
        )} field should contain 2 or more letters`;
        return null;
      } else if ((elem[0] === "password1" || elem[0] === "password2") &&
        elem[1].length < 8) {
        errors[elem[0]] = `${capitalizeFirst(
          elem[0]
        )} field should contain 8 or more letters`;
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
