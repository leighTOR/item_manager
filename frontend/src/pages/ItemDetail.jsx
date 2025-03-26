import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
      .catch((error) => console.error("Error fetching course", error));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/api/items/${id}/`, editItem);
      navigate("/");
    } catch (error) {
      console.error("Error updating course", error);
      alert("Failed to update course.");
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/api/items/${id}/`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting course", error);
      alert("Failed to delete course.");
    }
  };

  if (!item) return <div className="p-4">Loading...</div>;

  return (
    <div className="bg-violet-50 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white py-30 px-10 rounded-[30px] shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-violet-700">Edit Course</h1>
        <form onSubmit={handleUpdate} className="mb-4">
          <input
            type="text"
            placeholder="Course Title"
            className="border border-violet-300 rounded p-2 w-full mb-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            value={editItem.title}
            onChange={(e) =>
              setEditItem({ ...editItem, title: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Course Description"
            className="border border-violet-300 rounded p-2 w-full mb-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            value={editItem.description}
            onChange={(e) =>
              setEditItem({ ...editItem, description: e.target.value })
            }
            required
          ></textarea>
          <button
            className="bg-violet-500 hover:bg-violet-600 text-white rounded p-2 mr-2 transition duration-200"
            type="submit"
          >
            Update Course
          </button>
          <button
            className="bg-violet-700 hover:bg-violet-800 text-white rounded p-2 transition duration-200"
            type="button"
            onClick={handleDelete}
          >
            Delete Course
          </button>
        </form>
        <div className="mt-4">
          <Link to="/" className="text-violet-500 hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
