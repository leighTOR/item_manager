import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-violet-50">
      <h1 className="text-6xl font-bold mb-4 text-violet-700">404</h1>
      <p className="text-xl mb-8 text-violet-600">Page Not Found</p>
      <Link to="/" className="text-violet-500 hover:underline">
        Go back Home
      </Link>
    </div>
  );
}

export default NotFound;
