import { useEffect, useState } from "react";

interface Offer {
  id?: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  active: boolean;
}

export default function AddOffer() {
  const [form, setForm] = useState<Offer>({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    active: true,
  });

  const [offers, setOffers] = useState<Offer[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // 🔥 MODAL STATE
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const API = "http://localhost:8080/offers";

  // FETCH
  const fetchOffers = async () => {
    try {
      setLoading(true);
      const res = await fetch(API);
      const data = await res.json();

      if (Array.isArray(data)) {
        setOffers(data);
      } else if (Array.isArray(data.offers)) {
        setOffers(data.offers);
      } else {
        setOffers([]);
      }
    } catch (error) {
      console.error("Error fetching offers:", error);
      setOffers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  // INPUT
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId ? `${API}/${editingId}` : API;

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setForm({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        active: true,
      });

      setEditingId(null);
      fetchOffers();
    } catch (error) {
      console.error("Error saving offer:", error);
    }
  };

  // 🔥 OPEN MODAL
  const openDeleteModal = (id: string) => {
    setDeleteId(id);
    setShowModal(true);
  };

  // 🔥 CONFIRM DELETE
  const confirmDelete = async () => {
    if (!deleteId) return;

    try {
      await fetch(`${API}/${deleteId}`, {
        method: "DELETE",
      });

      setShowModal(false);
      setDeleteId(null);
      fetchOffers();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  // EDIT
  const handleEdit = (offer: Offer) => {
    setForm(offer);
    setEditingId(offer.id!);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">

        {/* FORM */}
        <div className="bg-white shadow-xl rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {editingId ? "Update Offer" : "Create New Offer"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Offer Title"
              className="border p-3 rounded-lg"
              required
            />

            <input
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="border p-3 rounded-lg"
              required
            />

            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold"
              >
                {editingId ? "Update Offer" : "Add Offer"}
              </button>
            </div>
          </form>
        </div>

        {/* LIST */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            All Offers
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : offers.length === 0 ? (
            <p className="text-center text-gray-500">
              No offers available
            </p>
          ) : (
            <div className="grid gap-4">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-white shadow-md rounded-xl p-4 flex justify-between"
                >
                  <div>
                    <h3 className="font-semibold">{offer.title}</h3>
                    <p className="text-sm">{offer.description}</p>
                    <p className="text-xs text-gray-400">
                      {offer.startDate} → {offer.endDate}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(offer)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => openDeleteModal(offer.id!)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 🔥 CUSTOM MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-white bg-opacity-40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
              <h2 className="text-lg font-semibold mb-4">
                Are you sure you want to delete this offer?
              </h2>

              <div className="flex justify-around">
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Yes
                </button>

                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}