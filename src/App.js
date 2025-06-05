import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import Products from './pages/Products';
import Blogs from './pages/Blogs';
import Markets from './pages/Markets';
import CropPrices from './pages/CropPrices';
import Weather from './pages/Weather';
import DemandForecast from "./pages/DemandForecast";
import CropSuggestion from './pages/CropSuggestion';





function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/crop-prices" element={<CropPrices />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/demand" element={<DemandForecast />} />
        <Route path="/suggestion" element={<CropSuggestion />} />




      </Routes>
    </>
  );
}

export default App;
