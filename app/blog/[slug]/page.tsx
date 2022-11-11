import {getSinglePost} from "../../../lib/getSinglePost";
import {getAllPosts} from "../../../lib/getAllPosts";

export default async function Page({params}: { params: { slug: string } }) {
   const data = await getSinglePost(params.slug);
   return (
      <div>
         {data.data[0].id}
      </div>
   )
}

export async function generateStaticParams() {
   const posts = await getAllPosts();

   return posts.data.map((post: { post: { attributes: { slug: string } } }) => ({
      // @ts-ignore
      slug: post.attributes.slug,
   }));
}
