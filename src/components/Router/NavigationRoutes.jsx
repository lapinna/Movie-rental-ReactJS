import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "../Pages/RegisterPage";
import HomePage from "../Pages/HomePage";
import YourMovies from "../Pages/YourMovies";
import Profile from "../Pages/Profile";

const NavigationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/yourMovies" element={<YourMovies />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationRoutes;
