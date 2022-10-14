import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer pointer">
      <span>
        <a
          href="https://github.com/falchon100?tab=repositories"
          target="_blank"
        >
          {" "}
          Creado por Angel
        </a>
      </span>
    </div>
  );
};
