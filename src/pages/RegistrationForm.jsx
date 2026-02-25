import { useState } from "react";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName) return alert("Full Name is required");
    if (!formData.email.includes("@")) return alert("Enter valid email");
    if (formData.phone.length < 10) return alert("Enter valid phone number");
    if (!formData.gender) return alert("Select gender");
    if (!formData.agree) return alert("You must accept terms");

    alert("Registration Successful ✅");
    console.log(formData);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
      agree: false,
    });
  };

  return (
    <div className="split-registration">
      {/* Left Image */}
      <div className="left-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
          alt="Decorative"
        />
        <div className="left-overlay">
          <h2>Welcome!</h2>
          <p>Fill the form to join our platform.</p>
        </div>
      </div>

      {/* Right Form */}
      <div className="right-form">
        <div className="form-card">
          <h2 className="form-title">Registration</h2>
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="input-group gender-group-wrapper">
              <label>Gender</label>
              <div className="gender-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />
                  Female
                </label>
              </div>
            </div>

            <div className="input-group">
              <label>Address</label>
              <textarea
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="terms-group">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label>I agree to terms & conditions</label>
            </div>

            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}