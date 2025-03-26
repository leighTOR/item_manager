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
    <div class="p-4">
      <h1 class="text-2xl mb-4">Welcome!</h1>
      <form onSubmit={handleCreateItem} class="mb-4">
        <input
          type="text"
          placeholder="Item Title"
          class="border p-2 w-full mb-2"
          value={newItem.title}
          onChange={(e) =>
            setNewItem({ ...newItem, title: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Item Description"
          class="border p-2 w-full mb-2"
          value={newItem.description}
          onChange={(e) =>
            setNewItem({ ...newItem, description: e.target.value })
          }
          required
        ></textarea>
        <button class="bg-blue-500 text-white p-2" type="submit">
          Create Item
        </button>
      </form>
      <div class="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <div key={item.id} class="border p-4">
            <h2 class="text-xl">{item.title}</h2>
            <p>{item.description}</p>
            <Link
              to={`/item/${item.id}`}
              class="text-blue-500 hover:underline mt-2 inline-block"
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
