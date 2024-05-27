import { SanityDocument } from "next-sanity";
import { useMemo } from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import PostPreview from "./PostPreview";

const getCurrentDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const month = today.toLocaleString("default", { month: "long" });
  let dd = today.getDate();

  const formattedToday = dd + " " + month + ", " + yyyy;
  return formattedToday;
};

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  const currentDate = useMemo(() => getCurrentDate(), []);

  return (
    <main className="mx-auto min-h-screen bg-white text-gray-800">
      <nav className="sticky top-0 z-10 flex justify-between px-10 py-8 text-black bg-white backdrop-blur-lg backdrop-filter bg-opacity-20">
        <p>juanmayahernandez@gmail.com</p>
        <section className="flex space-x-3 items-center">
          <Link href={""}>LinkedIn </Link>
          <p className="font-bold">/</p>
          <Link href={""}>Tiktok</Link>
          <p className="font-bold">/</p>
          <Link href={""}>Youtube</Link>
          <p className="font-bold">/</p>
          <Link href={""}>Instagram</Link>
        </section>
      </nav>

      <section className="max-w-2xl mx-auto">
        <div className="pb-5">
          <h2 className="text-4xl font-medium pb-2">Stories</h2>
          <div className="flex text-sm space-x-2 ">
            <h5 className="text-gray-400">{currentDate}</h5>
            <h5 className="text-gray-400">•</h5>
            <h5 className="text-gray-400">{posts.length} stories</h5>
          </div>
        </div>

        <ul className="space-y-5">
          {posts.map((post) => (
            <PostPreview key={post._id} post={post} />
          ))}
        </ul>
      </section>
    </main>
  );
}
