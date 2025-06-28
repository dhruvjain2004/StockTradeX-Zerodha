import React , {useState,useEffect} from "react";
import axios from "axios"
import { VerticalGraph } from "./VerticalGraph";
import { useAuth } from "../landingpage/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

//import { holdings } from "../data/data";

const Holdings = () => {
  const { token, user, logout } = useAuth();
  const navigate = useNavigate();
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchHoldings = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:3002/allHoldings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllHoldings(res.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching holdings:", err);
        setError("Failed to fetch holdings");
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, [token, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!token) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning">
          Please <Link to="/login">login</Link> to access holdings.
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
        <p className="mt-2">Loading holdings...</p>
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

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="container-fluid" style={{ padding: "2rem" }}>
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Holdings ({allHoldings.length})</h2>
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
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. cost</th>
                  <th>LTP</th>
                  <th>Cur. val</th>
                  <th>P&L</th>
                  <th>Net chg.</th>
                  <th>Day chg.</th>
                </tr>
              </thead>
              <tbody>
                {allHoldings.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? "text-success" : "text-danger";
                  const dayClass = stock.isLoss ? "text-danger" : "text-success";

                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td>{curValue.toFixed(2)}</td>
                      <td className={profClass}>
                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td className={profClass}>{stock.net}</td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="row mt-4">
            <div className="col">
              <h5>
                29,875.<span>55</span>{" "}
              </h5>
              <p>Total investment</p>
            </div>
            <div className="col">
              <h5>
                31,428.<span>95</span>{" "}
              </h5>
              <p>Current value</p>
            </div>
            <div className="col">
              <h5>1,553.40 (+5.20%)</h5>
              <p>P&L</p>
            </div>
          </div>
          <VerticalGraph data={data} />
        </div>
      </div>
    </div>
  );
};

export default Holdings;
