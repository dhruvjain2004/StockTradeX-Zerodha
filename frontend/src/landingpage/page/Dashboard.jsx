import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const { token, user, logout } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    qty: "",
    price: "",
    mode: "BUY",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/addNewOrder", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Order Placed ✅");
      setFormData({ name: "", qty: "", price: "", mode: "BUY" });
      navigate('/orders');
    } catch (err) {
      console.error("Order Error", err);
      alert("Failed to place order ❌");
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!token) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning">
          Please <a href="/login">login</a> to access the dashboard.
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid" style={{ padding: "2rem" }}>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Welcome, {user?.fullName || "User"}! 👋</h2>
            <button onClick={handleLogout} className="btn btn-outline-danger">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Place a New Order</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Stock Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="e.g., RELIANCE, TCS"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="qty" className="form-label">Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    name="qty"
                    placeholder="Number of shares"
                    value={formData.qty}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    placeholder="Price per share"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mode" className="form-label">Order Type</label>
                  <select 
                    className="form-select" 
                    name="mode" 
                    value={formData.mode} 
                    onChange={handleChange}
                  >
                    <option value="BUY">Buy</option>
                    <option value="SELL">Sell</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Quick Actions</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6 mb-3">
                  <Link to="/holdings" className="btn btn-outline-primary w-100">
                    View Holdings
                  </Link>
                </div>
                <div className="col-6 mb-3">
                  <Link to="/positions" className="btn btn-outline-success w-100">
                    View Positions
                  </Link>
                </div>
                <div className="col-6 mb-3">
                  <Link to="/orders" className="btn btn-outline-info w-100">
                    View Orders
                  </Link>
                </div>
                <div className="col-6 mb-3">
                  <Link to="/watchlist" className="btn btn-outline-warning w-100">
                    Watchlist
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-header">
              <h4>Account Info</h4>
            </div>
            <div className="card-body">
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>User ID:</strong> {user?.id}</p>
              <p><strong>Status:</strong> <span className="badge bg-success">Active</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
