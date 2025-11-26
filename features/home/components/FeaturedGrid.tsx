import { PostCard } from "@/features/home/components/PostCard";
import { PostWithRelations } from "@/features/type";
import Link from "next/link";
interface PostProps {
  posts: PostWithRelations[];
  post: PostWithRelations;
}
export function FeaturedGrid({ posts, post }: PostProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      <article className="lg:col-span-2 group">
        <Link href="#">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Featured Post"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          <div className="mt-4">
            <span className="text-blue-600 font-bold uppercase tracking-wide text-sm">
              {post.category?.nameCategory ?? "No Category"}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>

            <p className="text-gray-600 text-lg line-clamp-3">{post.content}</p>
          </div>
        </Link>
      </article>

      {/* Side Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
