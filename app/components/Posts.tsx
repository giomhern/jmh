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
    <main className="mx-auto md:max-w-2xl bg-white text-gray-800 flex flex-grow flex-col py-10">
      <section className="px-8">
        <div className="pb-5">
          <h2 className="md:text-4xl text-xl font-medium pb-2">Stories</h2>
          <div className="flex text-sm space-x-2 ">
            <h5 className="text-gray-400">{currentDate}</h5>
            <h5 className="text-gray-400">•</h5>
            <h5 className="text-gray-400">{posts.length} stories</h5>
          </div>
        </div>
        <ul className="md:space-y-7 space-y-4">
          {posts.map((post) => (
            <PostPreview key={post._id} post={post} />
          ))}
        </ul>
      </section>
    </main>
  );
}
