import { SanityDocument } from "next-sanity";
import Link from "next/link";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100 min-h-screen">
      {posts?.length > 0 ? (
        posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug.current}`}>
            <h1>{post.slug.current}</h1>
            <h2 className="p-4 hover:bg-blue-400">{post.title}</h2>
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-400">No posts found</div>
      )}
    </main>
  );
}
