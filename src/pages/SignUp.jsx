import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name is required");
      return;
    }

    if (!validateEmail(email)) {
      alert("Invalid email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Simulate saving user
    localStorage.setItem("user", JSON.stringify({ name, email }));

    // Go to OTP page
    navigate("/verify");
  };

 return (
  <div className="split-auth">

    {/* LEFT SIDE IMAGE */}
    <div className="auth-left">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="Signup Visual"
      />
      <div className="left-overlay">
        <h2>Create Your Account</h2>
        <p>Join us and manage everything in one place.</p>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="auth-right">
      <div className="auth-box">

        <h2>Create Account 🚀</h2>
        <p className="auth-subtitle">Sign up to get started</p>

        <form onSubmit={handleSubmit} className="auth-form">

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            Create Account
          </button>

        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/">Sign In</Link>
        </p>

      </div>
    </div>

  </div>
);
}
