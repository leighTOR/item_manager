import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function Home() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: "", description: "" });

  useEffect(() => {
    api.get("/api/items/").then((res) => setItems(res.data));
  }, []);

  const handleCreateItem = async (e) => {
    e.preventDefault();
    try {
      await api.post("/api/items/", newItem);
      setNewItem({ title: "", description: "" });
      const res = await api.get("/api/items/");
      setItems(res.data);
    } catch (error) {
      console.error("Error creating item", error);
      alert("Failed to create item.");
    }
  };

  return (
    <div className="p-4 bg-violet-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-violet-700">Welcome!</h1>
      <form onSubmit={handleCreateItem} className="mb-4">
        <input
          type="text"
          placeholder="Item Title"
          className="border border-violet-300 rounded p-2 w-full mb-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          value={newItem.title}
          onChange={(e) =>
            setNewItem({ ...newItem, title: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Item Description"
          className="border border-violet-300 rounded p-2 w-full mb-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          value={newItem.description}
          onChange={(e) =>
            setNewItem({ ...newItem, description: e.target.value })
          }
          required
        ></textarea>
        <button className="bg-violet-500 hover:bg-violet-600 text-white rounded p-2 w-full transition duration-200" type="submit">
          Create Item
        </button>
      </form>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border border-violet-300 rounded p-4 shadow-md bg-white">
            <h2 className="text-xl font-semibold text-violet-800">{item.title}</h2>
            <p className="text-violet-600">{item.description}</p>
            <Link
              to={`/item/${item.id}`}
              className="text-violet-500 hover:underline mt-2 inline-block"
            >
              View / Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
