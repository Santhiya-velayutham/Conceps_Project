import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Invalid Email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be 6+ characters");
      return;
    }

    localStorage.setItem("user", email);
    navigate("/dashboard");
  };

    return (
  <div className="split-auth">

    {/* LEFT SIDE IMAGE */}
    <div className="auth-left">
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        alt="Login Visual"
      />
      <div className="left-overlay">
        <h2>Welcome to Admin Panel</h2>
        <p>Manage users, analytics & products easily.</p>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="auth-right">
      <div className="auth-box">

        <div className="auth-logo">
        </div>

        <h2>Welcome Back 👋</h2>
        <p className="auth-subtitle">Sign in to continue</p>

        <form onSubmit={handleSubmit} className="auth-form">

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            Sign In
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>

      </div>
    </div>

  </div>
);

}
