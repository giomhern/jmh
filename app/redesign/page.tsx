import * as React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-black">
      {/* BEGINNING NAVBAR */}
      <nav className="sticky top-0 z-10 flex justify-between px-10 py-8 bg-gray-100 backdrop-blur-lg backdrop-filter bg-opacity-20">
        <p>juanmayahernandez@gmail.com</p>
        <section className="flex space-x-3 items-center">
          <p>LinkedIn </p>
          <p className="font-bold">/</p>
          <p>Tiktok</p>
          <p className="font-bold">/</p>
          <p>Youtube</p>
          <p className="font-bold">/</p>
          <p>Instagram</p>
        </section>
      </nav>
      {/* END NAVBAR */}

      <div className="bg-gray-100 flex flex-col justify-center items-center px-10 pt-24 pb-44 rounded-b-[150px]">
        <section className="flex items-center pb-10">
          <div className="h-40 w-40 z-0 relative left-10 rounded-full bg-red-200"></div>
          <div className="z-10 px-4 py-2 relative -rotate-[12deg] bg-white bottom-5 rounded-full">
            <p className="text-sm tracking-tight text-black">Juan Maya 👋🏼</p>
          </div>
        </section>

        <section className="w-[650px] text-center">
          <p className="text-7xl font-semibold tracking-tight text-gray-800 break-words">
            Building digital products, brands, and experiences.
          </p>
        </section>
      </div>
    </main>
  );
}
