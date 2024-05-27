import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import Image from "next/image";

const urlFor = (source: any) =>
  imageUrlBuilder({ projectId, dataset }).image(source);

const toLowerCase = (str: string) => str.toLowerCase();

export async function Post({ post }: { post: SanityDocument }) {
  const { title, mainImage, body, publishedAt, categories, description } = post;
  return (
    <main className="mx-auto max-w-3xl flex flex-col py-20">
      <div className="pb-10">
        <h1 className="text-4xl pb-2 text-black font-medium tracking-tight">{title}</h1>
        <div className="flex space-x-2 items-center">
          <p className="text-gray-500 text-md">
            {new Date(publishedAt).toDateString()}
          </p>
          <p className="text-gray-500 text-md">•</p>
          {categories.map((category: any) => (
            <p className="text-md text-gray-500">{toLowerCase(category)}</p>
          ))}
        </div>
      </div>
      <article className="prose prose-lg">
        <PortableText value={body} />
      </article>
    </main>
  );
}
