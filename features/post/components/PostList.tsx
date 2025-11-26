import { getAllPosts } from "@/features/action/action";
import { FeaturedPost } from "./FeaturedPost";
import { RecentPosts } from "./RecentPosts";
import { Sidebar } from "./Sidebar";

export default async function PostList() {
  const allPosts = await getAllPosts("post");
  const [latestPost, ...otherPosts] = allPosts;
  return (
    <main className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          {latestPost && (
            <FeaturedPost post={latestPost} />
          )}

          <RecentPosts posts={otherPosts} />
        </div>

        <Sidebar />
      </div>
    </main>
  );
}
