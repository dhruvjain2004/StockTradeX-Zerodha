import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../landingpage/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { token, user, logout } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3002/allOrders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!token) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning">
          Please <Link to="/login">login</Link> to access orders.
        </div>
      </div>
    );
  }

  if (loading) return (
    <div className="container mt-5">
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading orders...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="container mt-5">
      <div className="alert alert-danger">
        Error: {error}
      </div>
    </div>
  );

  return (
    <div className="container-fluid" style={{ padding: "2rem" }}>
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Orders ({orders.length})</h2>
            <div>
              <Link to="/dashboard" className="btn btn-outline-primary me-2">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="btn btn-outline-danger">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="card">
          <div className="card-body text-center">
            <div className="no-orders">
              <p className="h5 text-muted">You haven't placed any orders today</p>
              <Link to="/dashboard" className="btn btn-primary">
                Get started
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Stock Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Order Type</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td>{order.name}</td>
                      <td>{order.qty}</td>
                      <td>₹{order.price}</td>
                      <td>
                        <span className={`badge ${order.mode === 'BUY' ? 'bg-success' : 'bg-danger'}`}>
                          {order.mode}
                        </span>
                      </td>
                      <td>
                        <span className="badge bg-primary">Completed</span>
                      </td>
                      <td>{new Date(order.createdAt || Date.now()).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;