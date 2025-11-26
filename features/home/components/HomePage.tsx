import { getAllPosts } from "@/features/action/action";
import { FeaturedGrid } from "./FeaturedGrid";
import { MoreStories } from "./MoreStories";

export default async function HomePage() {
 const allPosts = await getAllPosts();
  const [latestPost, ...otherPosts] = allPosts;  
  return (
    <main className="container mx-auto px-6 py-20 bg-gray-50 min-h-screen text-gray-900">
      <FeaturedGrid post={latestPost} posts={allPosts} />
      <MoreStories posts={allPosts} />
    </main>
  );
}