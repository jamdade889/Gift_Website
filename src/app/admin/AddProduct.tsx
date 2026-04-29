import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router";

interface Product {
  id?: string;
  name: string;
  description: string;
  image: string;
  mainCategory: string;
  typeCategory: "simple" | "standard" | "premium";
}

const API_URL = "http://localhost:8080/api/products";

const MAIN_CATEGORIES = [
  "Eco-Friendly Corporate Gifts",
  "Branded Corporate Gifts",
  "Office Utility Gifts",
  "Weeding Gift",
  "personal events",
  "Diwali Gifts",
  "Corporate Kits",
  "Welcome Kits",
  "Festival Hampers",
  "Custom Branding Gifts",
];

export default function AddProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const [mainCategory, setMainCategory] = useState(MAIN_CATEGORIES[0]);
  const [typeCategory, setTypeCategory] =
    useState<"simple" | "standard" | "premium">("simple");

  // ✅ NEW STATE FOR DELETE MODAL
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch {
      alert("Failed to load products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("mainCategory", mainCategory);
    formData.append("typeCategory", typeCategory);
    if (image) formData.append("image", image);

    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, formData);
      } else {
        await axios.post(API_URL, formData);
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
    setMainCategory(MAIN_CATEGORIES[0]);
    setTypeCategory("simple");
    setEditId(null);
  };

  const handleImageChange = (file: File | null) => {
    setImage(file);
    if (file) setPreview(URL.createObjectURL(file));
  };

  // EDIT
  const handleEdit = (p: Product) => {
    setName(p.name);
    setDescription(p.description);
    setMainCategory(p.mainCategory);
    setTypeCategory(p.typeCategory);
    setEditId(p.id || null);
    setPreview(`http://localhost:8080/uploads/${p.image}`);
  };

  // DELETE FUNCTION
  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await axios.delete(`${API_URL}/${deleteId}`);
      fetchProducts();
      setDeleteId(null);
    } catch {
      alert("Failed to delete product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md mb-6"
        >
          <h2 className="text-xl font-semibold mb-4">
            {editId ? "Update Product" : "Add Product"}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

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
              onChange={(e) =>
                handleImageChange(e.target.files?.[0] || null)
              }
            />

            <select
              className="border p-3 rounded-lg"
              value={mainCategory}
              onChange={(e) => setMainCategory(e.target.value)}
            >
              {MAIN_CATEGORIES.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>

            <select
              className="border p-3 rounded-lg"
              value={typeCategory}
              onChange={(e) =>
                setTypeCategory(e.target.value as any)
              }
            >
              <option value="simple">Simple</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>

            <textarea
              placeholder="Description"
              className="border p-3 rounded-lg md:col-span-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {preview && (
            <img src={preview} className="w-28 mt-4 rounded-lg" />
          )}

          <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg">
            {editId ? "Update Product" : "Add Product"}
          </button>
        </form>

        {/* PRODUCTS */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={`http://localhost:8080/uploads/${p.image}`}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>

                <p className="text-sm text-gray-600">
                  {p.description}
                </p>

                <div className="mt-2 text-xs">
                  <span className="bg-gray-200 px-2 py-1 rounded mr-2">
                    {p.mainCategory}
                  </span>

                  <span className="bg-yellow-200 px-2 py-1 rounded">
                    {p.typeCategory}
                  </span>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleEdit(p)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => setDeleteId(p.id || null)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ CUSTOM DELETE MODAL */}
        {deleteId && (
          <div className="fixed inset-0 bg-white bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
              <h2 className="text-lg font-semibold mb-4">
                Are you sure you want to delete this product?
              </h2>

              <div className="flex justify-center gap-4">
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Yes, Delete
                </button>

                <button
                  onClick={() => setDeleteId(null)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <Outlet />
      </div>
    </div>
  );
}