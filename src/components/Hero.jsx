import React from "react";
import bg from "../assets/bg.jpg";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] bg-cover bg-top bg-no-repeat">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-3xl font-semibold">Mascotas y Niños Felices</div>
        <div className="text-xl pb-8">¿Cual es la mejor mascota para ti?</div>
        <button className="btn btn-active btn-neutral hover:bg-gray-700 text-xl">
          Leer mas
        </button>
      </div>
    </div>
  );
};
