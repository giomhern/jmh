import { SanityDocument } from "next-sanity";
import { useMemo } from "react";
import Link from "next/link";

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
    <main className="mx-auto divide-blue-100 min-h-screen bg-white">
      <nav className="sticky top-0 z-10 flex justify-between px-10 py-8 bg-blue-100 backdrop-blur-lg backdrop-filter bg-opacity-20">
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

      <section className="max-w-2xl mx-auto">
        <div>
          <h2 className="text-3xl font-semibold">Stories</h2>
          <div className="flex  space-x-4 divide-x-2 divide-gray-300">
            <h5 className="text-gray-400">{currentDate}</h5>
            <h5 className="text-gray-400 pl-4">{posts.length} stories</h5>
          </div>
        </div>

        {posts?.length > 0 ? (
          posts.map((post) => (
            <div>
              {post?.title}
              
            </div>
          ))
        ) : (
          <div>No posts found</div>
        )}
      </section>
      {/* start navigation bar 

    {posts?.length > 0 ? (
        posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug.current}`}>
            <h2 className="p-4 hover:bg-blue-400">{post.title}</h2>
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-400">No posts found</div>
      )}
*/}
    </main>
  );
}
