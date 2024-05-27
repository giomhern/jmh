import { groq } from "next-sanity";


export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`; 
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{title, mainImage, body, "slug": slug.current, "name": author->name, "categories": categories[]->title, publishedAt, "authorImage": author->image, "description": excerpt, "keywords": categories[]->title}`; 