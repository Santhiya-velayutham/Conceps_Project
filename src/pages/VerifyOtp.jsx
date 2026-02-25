import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [method, setMethod] = useState("email"); 
  const [sentOtp, setSentOtp] = useState(""); 
  const [otpSent, setOtpSent] = useState(false); 
  const [contact, setContact] = useState(""); 
  const navigate = useNavigate();

  const generateOtp = () => Math.floor(1000 + Math.random() * 9000).toString();

  const handleSendOtp = () => {
    if (!contact) {
      alert(`Please enter your ${method}`);
      return;
    }

    const newOtp = generateOtp();
    setSentOtp(newOtp);
    setOtpSent(true);
    alert(`OTP sent to your ${method}: ${newOtp} (simulated)`); 
  };

  const handleVerify = (e) => {
    e.preventDefault();

    if (otp.length !== 4) {
      alert("OTP must be 4 digits");
      return;
    }

    if (otp === sentOtp) {
      navigate("/dashboard");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="split-auth" style={{ display: "flex", minHeight: "100vh" }}>
      {/* LEFT SIDE IMAGE */}
      <div
        className="auth-left"
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
          alt="OTP Verification"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          className="left-overlay"
          style={{
            position: "absolute",
            color: "#fff",
            textAlign: "center",
            padding: "20px",
            background: "rgba(0,0,0,0.4)",
            borderRadius: "10px",
          }}
        >
          <h2>Secure Verification 🔐</h2>
          <p>
            {otpSent
              ? `Enter the 4-digit OTP sent to your ${method}`
              : `Enter your ${method} to receive OTP`}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div
        className="auth-right"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
          padding: "30px",
        }}
      >
        <div
          className="auth-box"
          style={{
            width: "100%",
            maxWidth: "400px",
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <div
            className="logo-circle"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#4f46e5",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              margin: "0 auto 20px",
            }}
          >
            A
          </div>

          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Verify OTP</h2>

          {/* Method Selection */}
          <div
            className="method-select"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <label>
              <input
                type="radio"
                value="email"
                checked={method === "email"}
                onChange={() => {
                  setMethod("email");
                  setOtpSent(false);
                  setOtp("");
                  setContact("");
                }}
              />{" "}
              Email
            </label>
            <label>
              <input
                type="radio"
                value="phone"
                checked={method === "phone"}
                onChange={() => {
                  setMethod("phone");
                  setOtpSent(false);
                  setOtp("");
                  setContact("");
                }}
              />{" "}
              Phone
            </label>
          </div>

          {/* Contact input + Send OTP button */}
          {!otpSent && (
            <div
              className="contact-group"
              style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
            >
              <input
                type={method === "email" ? "email" : "tel"}
                placeholder={method === "email" ? "Enter your email" : "Enter your phone"}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                }}
              />
              <button
                onClick={handleSendOtp}
                style={{
                  padding: "12px 20px",
                  borderRadius: "6px",
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Send OTP
              </button>
            </div>
          )}

          {/* OTP input + Verify */}
          {otpSent && (
            <form onSubmit={handleVerify} className="auth-form">
              <div className="otp-group" style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  maxLength="4"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="----"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "20px",
                    textAlign: "center",
                    letterSpacing: "8px",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "6px",
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Verify & Continue
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}