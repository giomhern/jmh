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
    <main className="mx-auto md:max-w-3xl flex flex-col py-20 px-8">
      <div className="pb-10">
        <h1 className="md:text-4xl text-xl pb-2 text-black font-medium tracking-tight break-words">{title}</h1>
        <div className="flex space-x-2 items-center">
          <p className="text-gray-500 md:text-md text-xs">
            {new Date(publishedAt).toDateString()}
          </p>
          <p className="text-gray-500 md:text-md text-xs">•</p>
          {categories.map((category: any) => (
            <p key={category} className="md:text-md text-gray-500 text-xs">{toLowerCase(category)}</p>
          ))}
        </div>
      </div>
      <article className="prose md:prose-lg prose-sm">
        <PortableText value={body} />
      </article>
    </main>
  );
}
