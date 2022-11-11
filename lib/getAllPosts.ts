import {strapiURL} from "../config/config";

export async function getAllPosts() {
   const res = await fetch(`${strapiURL}/api/blog-posts`)
   const data = res.json();

   return data;
}
