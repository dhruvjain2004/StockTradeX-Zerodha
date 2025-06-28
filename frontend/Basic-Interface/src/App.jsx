import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './simple-styles.css';
import './enhanced-styles.css';
import HomePage from './landingpage/Home/HomePage';
import Signup from './landingpage/signup/Signup';
import AboutPage from './landingpage/about/AboutPage';
import ProductsPage from './landingpage/products/ProductsPage';
import PricingPage from './landingpage/pricing/PricingPage';
import SupportPage from './landingpage/support/SupportPage';
import Login from './landingpage/login/login';
import Dashboard from './landingpage/page/Dashboard';
import NotFound from './landingpage/NotFound';
import Navbar from './landingpage/Navbar';
import Footer from './landingpage/Footer';
// Import trading components
import Holdings from './components/Holdings';
import Positions from './components/Positions';
import Orders from './components/Orders';
import WatchList from './components/WatchList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Trading routes */}
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;