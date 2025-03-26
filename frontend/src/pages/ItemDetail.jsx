import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [editItem, setEditItem] = useState({ title: "", description: "" });

  useEffect(() => {
    api.get(`/api/items/${id}/`)
      .then((res) => {
        setItem(res.data);
        setEditItem({ title: res.data.title, description: res.data.description });
      })
      .catch((error) => console.error("Error fetching item", error));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/api/items/${id}/`, editItem);
      navigate("/");
    } catch (error) {
      console.error("Error updating item", error);
      alert("Failed to update item.");
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/api/items/${id}/`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting item", error);
      alert("Failed to delete item.");
    }
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div class="p-4">
      <h1 class="text-2xl mb-4">Edit Item</h1>
      <form onSubmit={handleUpdate} class="mb-4">
        <input
          type="text"
          placeholder="Item Title"
          class="border p-2 w-full mb-2"
          value={editItem.title}
          onChange={(e) =>
            setEditItem({ ...editItem, title: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Item Description"
          class="border p-2 w-full mb-2"
          value={editItem.description}
          onChange={(e) =>
            setEditItem({ ...editItem, description: e.target.value })
          }
          required
        ></textarea>
        <button class="bg-blue-500 text-white p-2 mr-2" type="submit">
          Update Item
        </button>
        <button
          class="bg-red-500 text-white p-2"
          type="button"
          onClick={handleDelete}
        >
          Delete Item
        </button>
      </form>
    </div>
  );
}

export default ItemDetail;
