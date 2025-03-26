import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-6xl font-bold mb-4">404</h1>
      <p class="text-xl mb-8">Page Not Found</p>
      <Link to="/" class="text-blue-500 hover:underline">
        Go back Home
      </Link>
    </div>
  );
}

export default NotFound;
