import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import YourMoviesPage from "./pages/YourMoviesPage";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <div className="App">
      <Header title={"Movie rental"} />
      <div className="page-content">
        <Routes>
          <Route exact path="/" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/yourMovies" element={<YourMoviesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
      <Footer madeBy={"Made by: Inese Lapina"} year={"2023"} />
    </div>
  );
}

export default App;
