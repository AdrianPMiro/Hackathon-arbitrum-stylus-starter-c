"use client";
import React, { useState, useEffect } from "react";
import Navegation from "@/app/Navigation"
const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const members = [
    {
      name: "Adrián Pedrero",
      image: "https://cdn.intra.42.fr/users/fe2740fcfb47ed1356213e0547584f52/adpedrer.jpg",
    },
    {
      name: "Manuel Cuesta",
      image: "https://cdn.intra.42.fr/users/269f1d5e0dd2faba438053d7c3346d32/mcuesta-.jpg",
    },
    {
      name: "Nicolás Rosón",
      image: "https://cdn.intra.42.fr/users/1ce162fee1b8cf5298a96f4b938a8d29/nroson-m.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % members.length);
    }, 3000); // Cambio cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navegation />
    <div className="about-us-container bg-gradient-to-r from-blue-200 to-blue-500 p-8 rounded-md shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-orange-600 text-sm font-semibold">¿Cómo empezó todo?</h2>
            <h1 className="text-4xl font-bold mt-2">
              La historia de <br />
              nuestro proyecto <br />
            </h1>
            <p className="text-gray-700 mt-4">
              El proyecto Transparent Transference fue fundado por un equipo de 3 miembros conformado por Adrián Pedrero Miró, Manuel Cuesta Barrios y Nicolás Rosón Muñoz durante el trascurso de la Hackaton Learn and Earn que tuvo lugar del 6 de diciembre de 2024 al 9 de diciembre en el campus de 42 Madrid.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">Adrián Pedrero</h3>
            <p className="text-gray-700 mt-2">
              Realizó todo el trabajo de Backend. Sus amplios conocimientos de C obtenidos durante el curso de 42 Madrid y sus estudios, junto con su implementación de Blockchain, de la cual adquirió los conocimientos necesarios para el proyecto durante un periodo de tiempo desafiante, dieron vida a la idea que teníamos en mente al empezar este proyecto.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6 flex flex-col items-center">
          {/* Carousel */}
          <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {members.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold text-black">{members[currentSlide].name}</h3>
          </div>

          {/* Additional Info */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">Manuel Cuesta</h3>
            <p className="text-gray-700 mt-2">
              Fue quien se encargó de llevar a cabo el trabajo de Frontend. Gracias a su actitud autodidacta y afán de aprender con los que adquirió todos sus conocimientos en este campo fue que el diseño de la página web cobró vida y dio coherencia a la parte del proyecto que teníamos realizada antes de su gran aportación.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">Nicolás Rosón</h3>
            <p className="text-gray-700 mt-2">
              Planteó el diseño de la página web y sus respectivos componentes, así como el nombre y el logo. También se encargó de la presentación y descripción del trabajo realizado en el proyecto en un archivo README.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
