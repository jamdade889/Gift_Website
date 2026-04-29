import { useEffect, useState } from "react";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: string;
  assignedTo?: string;
}

export default function ContactSubmission() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const API = "http://localhost:8080/api/contact";

  // ✅ FETCH DATA
  const fetchContacts = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error("Error fetching contacts", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // ✅ DELETE
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this contact?")) return;

    await fetch(`${API}/${id}`, { method: "DELETE" });
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  // ✅ UPDATE STATUS
  const updateStatus = async (id: string, status: string) => {
    await fetch(`${API}/status/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    fetchContacts();
  };

  // ✅ ASSIGN AGENT
  const assignAgent = async (id: string, agent: string) => {
    await fetch(`${API}/assign/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ assignedTo: agent }),
    });

    fetchContacts();
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Submissions</h2>

      <div className="overflow-auto bg-white shadow rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Service</th>
              <th className="p-3">Message</th>
              <th className="p-3">Status</th>
              <th className="p-3">Agent</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((c) => (
              <tr key={c.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.phone}</td>
                <td className="p-3">{c.service}</td>
                <td className="p-3 max-w-xs truncate">{c.message}</td>

                {/* ✅ STATUS */}
                <td className="p-3">
                  <select
                    value={c.status}
                    onChange={(e) =>
                      updateStatus(c.id, e.target.value)
                    }
                    className="border p-1 rounded"
                  >
                    <option>Pending</option>
                    <option>Contacted</option>
                    <option>Closed</option>
                  </select>
                </td>

                {/* ✅ AGENT */}
                

                {/* ✅ ACTIONS */}
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {contacts.length === 0 && (
          <p className="p-4 text-center text-gray-500">
            No contact submissions yet
          </p>
        )}
      </div>
    </div>
  );
}