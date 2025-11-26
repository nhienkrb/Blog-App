import Link from "next/link";
import { format } from "date-fns"; 
import { PostWithRelations } from "@/features/type";

interface PostCardProps {
  post: PostWithRelations;
}

export function PostCard({ post }: PostCardProps) {
  
  return (
    <article className="group cursor-pointer h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="flex-1 flex flex-col">
        
        <div className="p-6 flex flex-col flex-1">
          {post.category && (
            <span className="text-blue-600 font-bold uppercase tracking-wide text-xs mb-2">
              {post.category.nameCategory}
            </span>
          )}
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 grow">
            {post.content.substring(0, 120)}...
          </p>

          <div className="flex items-center text-xs text-gray-500 mt-auto">
            <span>By {post.author?.name || "Unknown"}</span>
            <span className="mx-2">•</span>
            <time>{format(new Date(post.createdAt), "dd MMM, yyyy")}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}