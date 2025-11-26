import Link from "next/link";
import { PostWithRelations } from "@/features/type";

interface PostCardProps {
  post: PostWithRelations;
}
export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group cursor-pointer flex flex-col">
      <Link href={`/posts/${post.slug}`} className="flex-1 flex flex-col">
        <div className="relative overflow-hidden rounded-lg shadow-sm">
          <img
            src={
              "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            }
            alt={post.title}
            className={`w-full  object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out`}
          />
        </div>
        <div className="mt-4 flex flex-col flex-1">
          <span className="text-blue-600 font-bold uppercase tracking-wide text-sm mb-2">
            {post.category?.nameCategory}
          </span>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors leading-tight">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">
            {post.content}
          </p>
        </div>
      </Link>
    </article>
  );
}
