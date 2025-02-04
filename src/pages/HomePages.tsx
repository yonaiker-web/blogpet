import React from "react";
import { Hero } from "../components/Hero";
import blog1 from "../assets/blog/blog1.jpg";
import blog2 from "../assets/blog/blog2.jpg";
import blog3 from "../assets/blog/blog3.jpg";

import pet1 from "../assets/pets/pets1.jpg";
import pet2 from "../assets/pets/pets2.jpg";
import pet3 from "../assets/pets/pets3.jpg";
import pet4 from "../assets/pets/pets4.jpg";
import { Footer } from "../components/Footer";

const blogData = [
  {
    img: blog1,
    title: "Escoge tu mascota",
    url: "",
  },
  {
    img: blog2,
    title: "los animales necesitan cariño",
    url: "",
  },
  {
    img: blog3,
    title: "camina con tu mascota",
    url: "",
  },
];

const petsData = [
  {
    img: pet1,
    title: "Max",
  },
  {
    img: pet2,
    title: "Jerry",
  },
  {
    img: pet3,
    title: "Tom",
  },
  {
    img: pet4,
    title: "San",
  },
];
const HomePages = () => {
  return (
    <>
      <Hero />

      {/* seccion 1 */}
      <div className="text-center py-8">
        <div className="text-2xl font-semibold">
          BIENVENIDOS A NUESTRO CLUB PERRUNO
        </div>
        <div className=" px-12 py-4">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una gale
        </div>
        <div className="">
          <div className="">Lo ultimo de nuestro Blog</div>
          <div className="flex justify-center">
            {blogData.map((blogs) => (
              <div className="card m-4 bg-base-100 w-72 h-96 shadow-xl relative">
                <figure className="h-full">
                  <img
                    src={blogs.img}
                    alt="img"
                    className="object-cover w-full h-full"
                  />
                </figure>
                <div className="card-body bg-slate-100 opacity-50 absolute bottom-0 w-full">
                  <p className="text-black font-bold">{blogs.title}</p>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* seccion2 */}
      <div className="bg-slate-700 pb-8">
        <div className="text-white text-center font-semibold py-8">
          Para muchos de nosotros las mascotas no son simple compañeros, son
          miembros de la familia.
        </div>
        <div className="flex justify-center">
          {petsData.map((pets) => (
            <div className="">
              <div className="avatar p-4 ">
                <div className="w-60 rounded-full border-4">
                  <img src={pets.img} />
                </div>
              </div>
              <div className="text-center text-white font-bold">
                {pets.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePages;
