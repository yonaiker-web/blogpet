import React from "react";
import bg from "../assets/bg.jpg";

export const Hero = ({ children }) => {
  return (
    <div className="relative min-h-[80vh] bg-cover bg-top bg-no-repeat">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${bg})` }}
      />
      {children}
    </div>
  );
};
