import { PostWithRelations } from "@/features/type";
import { TimelineItem } from "./TimelineItem";

interface PostProps {
  posts: PostWithRelations[];
}

export function Timeline({ posts }: PostProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto px-6 py-12">
        <p>Chưa có bài viết</p>
      </div>
    );
  }
  return (
    <div className="relative pl-4">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2"></div>

      {posts.map((post) => (
        <TimelineItem key={post.id} post={post} />
      ))}
    </div>
  );
}
