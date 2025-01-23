"use client";
import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { useSidebar } from "./sidebarContext";

function Button({ direction }) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className={`${
        direction === "ltr" ? "absolute top-8 right-2" : "absolute top-8 left-2"
      }`}
    >
      <FaAlignJustify color="white" />
    </button>
  );
}

export default Button;
