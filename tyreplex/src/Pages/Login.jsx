import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiTireIron } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login process without backend
    if (email === "test@example.com" && password === "password") {
      setMessage("User logged in successfully");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      setMessage("Failed to log in. Please try again.");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        {message && (
          <div className={`alert ${message.includes("successfully") ? "alert-success" : "alert-danger"}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="text-center">
          <div className="mb-3">
          <GiTireIron size={50} className="text-primary" />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login to your account
          </button>
          <div className="d-flex justify-content-between align-items-center">
            <div>Don't have an account?</div>
            <button
              className="btn btn-link p-0"
              type="button"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
