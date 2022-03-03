import React, { useState } from "react";

function Content() {
  const [theme, setTheme] = useState(localStorage.theme);
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-5xl font-bold mb-20 dark:text-white transition duration-500">
        Dark Mode on Tailwind React
      </h1>
    </div>
  );
}

export default Content;
