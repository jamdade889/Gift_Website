import { useState } from "react";
import API from "../../services/api";

// ✅ Define type for product
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

// ✅ Define props type
type Props = {
  product: Product;
  refresh: () => void;
  close: () => void;
};

export default function EditProduct({ product, refresh, close }: Props) {
  const [form, setForm] = useState<Product>(product);

  const handleUpdate = async () => {
    await API.put(`/${form.id}`, form);
    refresh();
    close();
  };

  return (
    <div className="border p-4 mb-6 bg-gray-100">
      <h2 className="font-bold mb-2">Edit Product</h2>

      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 mr-2"
      />

      <input
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: Number(e.target.value) })
        }
        className="border p-2 mr-2"
      />

      <input
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
        className="border p-2 mr-2"
      />

      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-4 py-2 mr-2"
      >
        Update
      </button>

      <button onClick={close} className="bg-gray-400 px-4 py-2">
        Cancel
      </button>
    </div>
  );
}