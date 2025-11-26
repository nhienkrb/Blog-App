import { PostHeader } from "./PostHeader";
import { PostContent } from "./PostContent";
import { TableOfContents } from "./TableOfContents";
import { getOnePostAction } from "@/features/action/action";

export default async function PostDetail({ slug }: { slug: string }) {

  const postRes = await getOnePostAction({ slug });
  if (!postRes.success) {
    return <p>{postRes.message}</p>;
  }

  const post = postRes.data;
  return (
    <main className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen dark:bg-gray-800">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3 bg-white p-8 rounded-xl shadow-sm border  h-fit dark:bg-gray-800 dark:text-gray-300">
          <PostHeader post={post}/>
          <PostContent post={post} />
        </div>

        <TableOfContents />
      </div>
    </main>
  );
}
