import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-violet-50 min-h-screen flex items-center justify-center p-4">
      <div className="text-center bg-white py-30 px-10 rounded-[30px] shadow-lg">
        <h1 className="text-6xl font-bold mb-4 text-violet-700">404</h1>
        <p className="text-xl mb-8 text-violet-600">Page Not Found</p>
        <Link to="/" className="text-violet-500 hover:underline">
          Go back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
