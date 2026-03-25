import { useState } from "react";
import API from "../../services/api";

// ✅ Props type
type Props = {
  refresh: () => void;
};

// ✅ Form type
type ProductForm = {
  name: string;
  price: number;
  image: string;
};

export default function AddProduct({ refresh }: Props) {
  const [form, setForm] = useState<ProductForm>({
    name: "",
    price: 0,
    image: "",
  });

  // ✅ Fix event type
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await API.post("/", form);

    setForm({ name: "", price: 0, image: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 mr-2"
      />

      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: Number(e.target.value) })
        }
        className="border p-2 mr-2"
      />

      <input
        placeholder="Image URL"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
        className="border p-2 mr-2"
      />

      <button className="bg-green-600 text-white px-4 py-2">
        Add Product
      </button>
    </form>
  );
}