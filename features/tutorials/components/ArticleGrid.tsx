import { PostWithRelations } from "@/features/type";
import { ArticleCard } from "./ArticleCard";


interface PostProps {
  posts : PostWithRelations[]
}

export function ArticleGrid({posts} : PostProps) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <ArticleCard key={post.id} post={post} />
      ))}
    </div>
  );
}