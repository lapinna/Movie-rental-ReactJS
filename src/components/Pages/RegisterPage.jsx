import RegisterForm from "../Form/Register/RegisterForm";

const RegisterPage = () => {
  const addUser = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <RegisterForm addUser={addUser} />
    </div>
  );
};

export default RegisterPage;
