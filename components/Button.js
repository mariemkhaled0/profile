"use client";
import React from "react";
import { FaAlignJustify } from "react-icons/fa";

function Button({ direction }) {
  const handleToggle = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("hidden");
    console.log(sidebar);
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
