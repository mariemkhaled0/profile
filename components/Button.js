"use client";
import React, { useEffect, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";

function Button({ direction }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This will ensure that the code runs only on the client
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    if (isMounted) {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("hidden");
      console.log(sidebar);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`${
        direction === "ltr" ? "absolute top-8 right-2" : "absolute top-8 left-2"
      }`}
    >
      <FaAlignJustify color="white" />
    </button>
  );
}

export default Button;
