import { PostWithRelations } from "@/features/type";
import { PostCard } from "./PostCard"; 
interface PostProps {
  posts: PostWithRelations[];
}
export function MoreStories({ posts }: PostProps) {

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 border-b pb-4 ">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
