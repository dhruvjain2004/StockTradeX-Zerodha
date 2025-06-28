import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { useAuth } from "../landingpage/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

//import { positions } from "../data/data";

export default function Positions() {
    const { token, user, logout } = useAuth();
    const navigate = useNavigate();
    const [positions, setPositions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }

        const getData = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:3002/allPositions", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setPositions(response.data);
                setError(null);
            } catch (err) {
                console.error("Error fetching positions:", err);
                setError("Failed to fetch positions");
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [token, navigate]);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (!token) {
        return (
            <div className="container mt-5">
                <div className="alert alert-warning">
                    Please <Link to="/login">login</Link> to access positions.
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
                <p className="mt-2">Loading positions...</p>
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
                        <h2>Positions ({positions.length})</h2>
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

            <div className="card">
                <div className="card-body">
                    <div className="order-table">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Instrument</th>
                                    <th>Qty.</th>
                                    <th>Avg.</th>
                                    <th>LTP</th>
                                    <th>P&L</th>
                                    <th>Chg.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {positions.map((stock, index) => {
                                    const curValue = stock.price * stock.qty;
                                    const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                                    const profClass = isProfit ? "text-success" : "text-danger";
                                    const dayClass = stock.isLoss ? "text-danger" : "text-success";

                                    return (
                                        <tr key={index}>
                                            <td>{stock.product}</td>
                                            <td>{stock.name}</td>
                                            <td>{stock.qty}</td>
                                            <td>{stock.avg.toFixed(2)}</td>
                                            <td>{stock.price.toFixed(2)}</td>
                                            <td className={profClass}>
                                                {(curValue - stock.avg * stock.qty).toFixed(2)}
                                            </td>
                                            <td className={dayClass}>{stock.day}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

//export default Positions;