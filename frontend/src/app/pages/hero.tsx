"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <section
      className="relative bg-[url(https://media.istockphoto.com/id/805089034/photo/sri-lankan-school-children-in-classroom.jpg?s=2048x2048&w=is&k=20&c=lCAuhclAeT7cRQhV7MalogZbpQ_HidwqvmxMbLNZOv8=)] bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-white-500 sm:bg-transparent from-white/95 to-white/25 ltr:bg-gradient-to-r rtl:bg-gradient-to-l"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
          Nurturing Minds, 

            <strong className="block font-extrabold text-rose-700">Empowering Futures . </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
          Welcome to IslandClassroom, where the shores of innovation meet the waves of knowledge, bringing quality education to every corner of Sri Lanka.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-black sm:w-auto"
              >
                Get Started
              </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
