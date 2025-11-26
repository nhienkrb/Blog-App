import { PostWithRelations } from "@/features/type";
import { PostCard } from "./PostCard";

interface RecentPostsProps {
  posts: PostWithRelations[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
  if (posts.length === 0) {
    return <div className="text-center py-10">Chưa có bài viết nào.</div>;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 border-b py-2 my-3 border-gray-200">
        Recent Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}