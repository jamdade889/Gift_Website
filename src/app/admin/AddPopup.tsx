// import { useEffect, useState } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:8080/offers";

// export default function AddPopup() {
//   const [offers, setOffers] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     delay: 1500
//   });
//   const [editId, setEditId] = useState(null);

//   // 🔥 FETCH ALL
//   const fetchData = async () => {
//     const res = await axios.get(API_URL);
//     setOffers(res.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // 🔥 ADD / UPDATE
//   const handleSubmit = async () => {
//     if (editId) {
//       await axios.put(`${API_URL}/${editId}`, form);
//       setEditId(null);
//     } else {
//       await axios.post(API_URL, form);
//     }

//     setForm({ title: "", description: "", delay: 1500 });
//     fetchData();
//   };

//   // 🔥 DELETE
//   const handleDelete = async (id) => {
//     await axios.delete(`${API_URL}/${id}`);
//     fetchData();
//   };

//   // 🔥 EDIT
//   const handleEdit = (offer) => {
//     setForm(offer);
//     setEditId(offer.id);
//   };

//   return (
//     <div className="p-8 max-w-2xl mx-auto">

//       <h1 className="text-2xl font-bold mb-4">Popup Manager</h1>

//       {/* FORM */}
//       <input
//         placeholder="Title"
//         value={form.title}
//         onChange={(e) => setForm({ ...form, title: e.target.value })}
//         className="w-full mb-2 p-2 border"
//       />

//       <input
//         placeholder="Description"
//         value={form.description}
//         onChange={(e) => setForm({ ...form, description: e.target.value })}
//         className="w-full mb-2 p-2 border"
//       />

//       <input
//         type="number"
//         placeholder="Delay (ms)"
//         value={form.delay}
//         onChange={(e) => setForm({ ...form, delay: e.target.value })}
//         className="w-full mb-2 p-2 border"
//       />

//       <button
//         onClick={handleSubmit}
//         className="bg-green-500 text-white px-4 py-2 rounded mb-5"
//       >
//         {editId ? "Update Popup" : "Add Popup"}
//       </button>

//       {/* LIST */}
//       {offers.map((o) => (
//         <div key={o.id} className="border p-3 mb-3 rounded">

//           <h3 className="font-bold">{o.title}</h3>
//           <p>{o.description}</p>
//           <p className="text-sm text-gray-500">Delay: {o.delay} ms</p>

//           <div className="mt-2 flex gap-2">
//             <button
//               onClick={() => handleEdit(o)}
//               className="bg-blue-500 text-white px-3 py-1 rounded"
//             >
//               Edit
//             </button>

//             <button
//               onClick={() => handleDelete(o.id)}
//               className="bg-red-500 text-white px-3 py-1 rounded"
//             >
//               Delete
//             </button>
//           </div>

//         </div>
//       ))}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { PlusCircle, Trash2, Edit3, Clock } from "lucide-react";

const API_URL = "http://localhost:8080/offers";

export default function AddPopup() {
  const [offers, setOffers] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    delay: 1500,
  });
  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    const res = await axios.get(API_URL);
    setOffers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post(API_URL, form);
    }

    setForm({ title: "", description: "", delay: 1500 });
    fetchData();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchData();
  };

  const handleEdit = (offer) => {
    setForm(offer);
    setEditId(offer.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Popup Manager 
        </h1>

        {/* FORM */}
        <div className="space-y-3">
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <div className="flex items-center gap-2">
            <Clock size={18} />
            <input
              type="number"
              placeholder="Delay (ms)"
              value={form.delay}
              onChange={(e) =>
                setForm({ ...form, delay: e.target.value })
              }
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl shadow-md transition"
          >
            <PlusCircle size={18} />
            {editId ? "Update Popup" : "Add Popup"}
          </button>
        </div>
      </motion.div>

      {/* LIST */}
      <div className="max-w-2xl mx-auto mt-8 space-y-4">
        {offers.map((o) => (
          <motion.div
            key={o.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-5 rounded-2xl shadow-md border"
          >
            <h3 className="text-lg font-semibold">{o.title}</h3>
            <p className="text-gray-600">{o.description}</p>
            <p className="text-sm text-gray-400 mt-1">
              Delay: {o.delay} ms
            </p>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => handleEdit(o)}
                className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                <Edit3 size={16} /> Edit
              </button>

              <button
                onClick={() => handleDelete(o.id)}
                className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
