import { PortableText } from "@portabletext/react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { projectId, dataset } from "@/sanity/env";

const urlFor = (source) => imageUrlBuilder({ projectId, dataset }).image(source);
const PostPreview = ({ post }) => {
  const { title, publishedAt, body } = post;
  return (
    <div className="space-y-2">
      <Link
        href={`/blog/${post.slug.current}`}
        className="font-medium tracking-tight text-xl"
      >
        {title}
      </Link>
      <div
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <PortableText value={body[1]} />
      </div>
      <p className="text-gray-500 text-sm">
        {new Date(publishedAt).toDateString()}
      </p>
    </div>
  );
};

export default PostPreview;
