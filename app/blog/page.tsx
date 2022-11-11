import Link from "next/link";
import {getAllPosts} from "../../lib/getAllPosts";
import {Key} from "react";

export default async function Page({}) {
   const data = await getAllPosts();
   return (
      <div style={{display: "flex", flexDirection: "column"}}>
         {data.data.map((post: { post: any }, key: { key: Key | null | undefined }) => {
            return (
               // @ts-ignore
               <Link href={`/blog/${post.attributes.slug}`} passHref key={key}>
                  {/*@ts-ignore*/}
                  <span>{post.attributes.slug}</span>
               </Link>
            )
         })}
      </div>
   )
}

