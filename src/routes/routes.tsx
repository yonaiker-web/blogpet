import HomePages from "../pages/HomePages";
import { routes } from "./links";
import React from "react";

interface DirRoutes {
  path: String;
  element: JSX.Element;
  name: string;
}

export const publicDir: DirRoutes[] = [
  { path: routes.home, element: <HomePages />, name: "Inicio" },
  { path: routes.pets, element: <></>, name: "Mascotas" },
  { path: routes.blog, element: <></>, name: "Blog" },
  { path: routes.contact, element: <></>, name: "Contacto" },
];
