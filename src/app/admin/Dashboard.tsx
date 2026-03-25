import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router";

interface Product {
  id?: string;
  name: string;
  description: string;
  image: string;
  category: "simple" | "standard" | "premium";
}

const API_URL = "http://localhost:8080/api/products";

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "1234";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [category, setCategory] = useState<"simple" | "standard" | "premium">("simple");
  const [loading, setLoading] = useState(false);

  // LOGIN
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL + "/");
      setProducts(res.data);
    } catch {
      alert("Failed to load products");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isLoggedIn) fetchProducts();
  }, [isLoggedIn]);

  // SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    if (image) formData.append("image", image);

    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, formData);
        setEditId(null);
      } else {
        await axios.post(`${API_URL}/`, formData);
      }

      resetForm();
      fetchProducts();
    } catch {
      alert("Error saving product");
    }
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setImage(null);
    setPreview("");
    setCategory("simple");
  };

  // IMAGE PREVIEW
  const handleImageChange = (file: File | null) => {
    setImage(file);
    if (file) setPreview(URL.createObjectURL(file));
  };

  // EDIT
  const handleEdit = (p: Product) => {
    setName(p.name);
    setDescription(p.description);
    setCategory(p.category);
    setEditId(p.id || null);
    setPreview(`http://localhost:8080/uploads/${p.image}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // DELETE
  const handleDelete = async (id?: string) => {
    if (!id) return;
    if (!confirm("Delete this product?")) return;

    await axios.delete(`${API_URL}/${id}`);
    fetchProducts();
  };

  // LOGIN UI
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
            Admin Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="border p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg font-semibold">
            Login
          </button>
        </form>
      </div>
    );
  }

  // DASHBOARD UI
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>

          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 md:p-6 rounded-2xl shadow-md mb-6"
        >
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            {editId ? "Update Product" : "Add Product"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              className="border p-3 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="file"
              className="border p-2 rounded-lg"
              onChange={(e) => handleImageChange(e.target.files?.[0] || null)}
            />

            <select
              className="border p-3 rounded-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
            >
              <option value="simple">Simple</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>

            <textarea
              placeholder="Description"
              className="border p-3 rounded-lg md:col-span-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {preview && (
            <img src={preview} className="w-28 mt-4 rounded-lg" />
          )}

          <button
            className={`mt-4 w-full md:w-auto px-6 py-3 rounded-lg text-white font-semibold ${editId
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-600 hover:bg-green-700"
              }`}
          >
            {editId ? "Update Product" : "Add Product"}
          </button>
        </form>

        {/* PRODUCT GRID */}
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={`http://localhost:8080/uploads/${p.image}`}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {p.description}
                  </p>

                  <span className="inline-block mt-2 text-xs bg-gray-200 px-2 py-1 rounded">
                    {p.category}
                  </span>

                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => handleEdit(p)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(p.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Outlet />
      </div>
    </div>
  );
}
