import React from "react";
import { publicDir } from "../routes/routes";
import { Link } from "react-router-dom";
import { MdPets } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className=" flex justify-center navbar text-white bg-gray-900 p-0">
      <div className="navbar-start  text-2xl">
        <MdPets />
        <a className="btn btn-ghost text-3xl">Pets</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg ">
          {publicDir.map((route) => (
            <li key={route.path} className="hover:bg-slate-700 ">
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
