import * as React from "react";
import Image from "next/image";
import impressions from "../components/impressions";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* start navigation bar */}
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
      {/* end navigation bar */}

      {/* start header */}
      <div className="bg-gray-100 flex flex-col justify-center items-center px-10 pt-24 pb-44 rounded-b-[150px]">
        <section className="flex items-center pb-10">
          <div className="h-40 w-40 z-0 relative left-10 rounded-full bg-red-200"></div>
          <div className="z-10 px-4 py-2 relative -rotate-[12deg] bg-white bottom-5 rounded-full">
            <p className="text-md tracking-tight text-black">Juan Maya 👋🏼</p>
          </div>
        </section>

        <section className="w-[650px] text-center">
          <p className="text-7xl font-semibold tracking-tight text-gray-800 break-words">
            Building digital products, brands, and experiences.
          </p>
        </section>
      </div>

      {/* end header */}

      <section className="grid grid-cols-2 items-center bg-white rounded-b-[150px] px-10 pb-20 pt-32">
        <div className="flex items-center justify-center">
          <div className="h-44 w-44 rounded-md  bg-red-200"></div>
        </div>
        <div className="w-10/12">
          <p className="font-regular text-black text-left break-words text-3xl tracking-tighter">
            Despite facing numerous challenges as an undocumented/DACA
            immigrant, including epilepsy and a move to the United States at a
            young age, I have excelled in my studies and career. I started my
            first business at age 19 and I scaled it to generate $8,000 in
            earnings to finance my studies at UCLA.
          </p>
        </div>
      </section>

      <section className="text-center pb-16">
        <p className="tracking-tight text-gray-800 text-lg">
          I have also participated in numerous startup accelerator programs
          including:
        </p>
      </section>

      <section className="bg-gray-100 py-24 flex flex-col justify-center rounded-t-[150px]">
        <p className="font-semibold tracking-tight leading-[1.5] mx-auto text-gray-800 break-words leading-regular text-4xl text-center pb-10">
          Utilize social networks to create meaningful impact.
        </p>

        <div className="relative flex px-10 pt-5 pb-10 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="flex-shrink px-4 py-2 relative top-1 -rotate-[12deg] bg-white bottom-5 rounded-full">
            <p className="text-md tracking-tight text-black">
              Social Media Reach
            </p>
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <ul className="flex justify-center items-center pt-5 space-x-24 list-none">
          {impressions.map((impression) => {
            return (
              <li key={impression.id} className="space-y-3">
                <div className="h-16 py-3 flex items-center">
                  {impression.platform}
                </div>
                <div>
                  <p className="text-4xl text-gray-800 font-semibold tracking-tight">
                    {impression.header}
                  </p>
                  <p className="tracking-tight text-gray-500">
                    {impression.subheader}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
