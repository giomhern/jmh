import { PortableText } from "@portabletext/react";
import Link from "next/link";
const PostPreview = ({ post }) => {
  const { title, publishedAt, body } = post;
  return (
    <div>
      <Link href={`/blog/${post.slug.current}`} className="font-medium tracking-tight text-xl">{title}</Link>
      <p className="text-gray-500 text-sm">
        {new Date(publishedAt).toDateString()}
      </p>

    </div>
  );
};

export default PostPreview;
