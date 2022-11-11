export async function getAllPosts() {
   const res = await fetch(`http://localhost:1337/api/blog-posts`)
   const data = res.json();

   return data;
}
