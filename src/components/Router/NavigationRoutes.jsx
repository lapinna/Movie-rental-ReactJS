import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "../Pages/RegisterPage";
import HomePage from "../Pages/HomePage";

const NavigationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationRoutes;
