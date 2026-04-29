
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "1234";

export default function Dashboard() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ✅ CHECK LOGIN
  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (admin) setIsLoggedIn(true);
  }, []);

  // ✅ LOGIN
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("admin", "true");
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  // ✅ LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("admin");
    setIsLoggedIn(false);
  };

  // ❌ LOGIN PAGE
  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0F3D2E] px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Admin Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-gradient-to-r from-[#E6C48A] to-[#D4AF37] text-[#1F3D2B] p-3 rounded-lg font-semibold">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* 🔥 OVERLAY (MOBILE) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 🔥 SIDEBAR */}
      <aside
        className={`fixed z-50 lg:static top-0 left-0 h-full w-64 bg-[#0F3D2E] text-white p-6 space-y-6 shadow-lg transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <h2 className="text-2xl font-bold text-[#E6C48A]">
          Admin Panel
        </h2>

        <nav className="space-y-3">

          <button
            onClick={() => {
              navigate("/admin/addproduct");
              setSidebarOpen(false);
            }}
            className="w-full text-left px-4 py-2 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-[#E6C48A] hover:to-[#D4AF37] hover:text-[#1F3D2B] transition"
          >
            Add Product
          </button>

          <button
            onClick={() => {
              navigate("/admin/addoffer");
              setSidebarOpen(false);
            }}
            className="w-full text-left px-4 py-2 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-[#E6C48A] hover:to-[#D4AF37] hover:text-[#1F3D2B] transition"
          >
            Add Offer
          </button>

          <button
            onClick={() => {
              navigate("/admin/addpopup");
              setSidebarOpen(false);
            }}
            className="w-full text-left px-4 py-2 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-[#E6C48A] hover:to-[#D4AF37] hover:text-[#1F3D2B] transition"
          >
            Add Popup
          </button>

          <button
            onClick={() => {
              navigate("/admin/contactsubmission");
              setSidebarOpen(false);
            }}
            className="w-full text-left px-4 py-2 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-[#E6C48A] hover:to-[#D4AF37] hover:text-[#1F3D2B] transition"
          >
            Contact Submissions
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white transition"
          >
            Logout
          </button>

        </nav>
      </aside>

      {/* 🔥 MAIN */}
      <div className="flex-1 flex flex-col">

        {/* 🔥 TOPBAR */}
        <header className="bg-white shadow px-4 sm:px-6 py-4 flex justify-between items-center">

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
            Dashboard
          </h1>

          <span className="text-sm text-gray-500 hidden sm:block">
            Welcome, Admin 👋
          </span>
        </header>

        {/* 🔥 CONTENT */}
        <main className="p-4 sm:p-6 flex-1 overflow-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
}