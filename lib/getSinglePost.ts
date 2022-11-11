export async function getSinglePost(slug: string) {
   const res = await fetch(`http://localhost:1337/api/blog-posts?filters[slug][$eq]=${slug}`)
   const data = res.json();

   return data;
}
