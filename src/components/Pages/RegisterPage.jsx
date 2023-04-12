import LoginForm from "../Form/Login/LoginForm";
import RegisterForm from "../Form/Register/RegisterForm";

const RegisterPage = () => {
  const addUser = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <LoginForm />
      <RegisterForm addUser={addUser} />
    </div>
  );
};

export default RegisterPage;
