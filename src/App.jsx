import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import VerifyOtp from "./pages/VerifyOtp";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import RegistrationForm from "./pages/RegistrationForm";
import ListPage from "./pages/ListPage";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth Pages */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<VerifyOtp/>} />

        {/* Layout Pages */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="registration" element={<RegistrationForm />} />
          <Route path="list" element={<ListPage />} />
          <Route path="/dashboard/products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
