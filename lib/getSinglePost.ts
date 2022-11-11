import {strapiURL} from "../config/config";

export async function getSinglePost(slug: string) {
   const res = await fetch(`${strapiURL}/api/blog-posts?filters[slug][$eq]=${slug}`)
   const data = res.json();

   return data;
}
