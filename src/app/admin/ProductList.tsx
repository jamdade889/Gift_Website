import API from "../../services/api";

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  offer: string;
  inCollection: boolean;
}

interface Props {
  products: Product[];
  refresh: () => void;
  setEditProduct: (p: Product) => void;
}

export default function ProductList({ products, refresh, setEditProduct }: Props) {

  const deleteProduct = async (id: string) => {
    try {
      await API.delete(`/${id}`);
      alert("Product Deleted");
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        All Products
      </h2>

      {/* EMPTY STATE */}
      {products.length === 0 && (
        <p className="text-gray-500">No products found</p>
      )}

      {/* GRID */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* IMAGE */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {p.name}
              </h3>

              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {p.description}
              </p>

              {/* OFFER */}
              <p className="mt-2 text-sm font-medium text-green-600">
                {p.offer ? `Offer: ${p.offer}` : "No Offer"}
              </p>

              {/* COLLECTION */}
              <span
                className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
                  p.inCollection
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {p.inCollection ? "In Collection" : "Not in Collection"}
              </span>

              {/* ACTION BUTTONS */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setEditProduct(p)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProduct(p.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}