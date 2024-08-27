import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiTireIron } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    setMessage("Signup successful!");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        {message && (
          <div className={`alert ${message.includes("successful") ? "alert-success" : "alert-danger"}`}>
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
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              required
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Create your account
          </button>
          <div className="d-flex justify-content-between align-items-center">
            <div>Already have an account?</div>
            <button
              className="btn btn-link p-0"
              type="button"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
