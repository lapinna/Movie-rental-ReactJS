import "./App.scss";
import NavigationRoutes from "./components/Router/NavigationRoutes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rental</h1>
      </header>
      <div className="page-content">
        <NavigationRoutes />
      </div>
      <footer>
        <div className="footer-left">Made by: Inese Lapina</div>
        <div className="footer-right">2023</div>
      </footer>
    </div>
  );
}

export default App;
