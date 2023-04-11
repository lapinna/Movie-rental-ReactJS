import "./App.scss";
//import RegisterForm from "./components/Form/Register/RegisterForm";
import RegisterPage from "./components/Pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rental</h1>
      </header>
      <div className="page-content">
        <RegisterPage />
      </div>
      <footer>
        <div className="footer-left">Made by: Inese Lapina</div>
        <div className="footer-right">2023</div>
      </footer>
    </div>
  );
}

export default App;
