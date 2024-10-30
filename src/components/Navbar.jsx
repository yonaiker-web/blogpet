import React from "react";
import { publicDir } from "../routes/routes";
import { Link } from "react-router-dom";
import { MdPets } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <MdPets />
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {publicDir.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
