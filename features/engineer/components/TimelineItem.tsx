// src/features/blog/components/TimelineItem.tsx
import { PostWithRelations } from "@/features/type";
import { format } from "date-fns";
import Link from "next/link";

interface PostProps {
  post: PostWithRelations;
}


export function TimelineItem({ post }: PostProps) {
  return (
    <article className="relative flex items-start mb-12 group last:mb-0">
      <div className="absolute left-0 w-4 h-4 bg-primary border-4 border-background rounded-full transform -translate-x-1/2 z-10"></div>
      
      <div className="ml-8">
        <time className="text-sm text-muted-foreground block mb-1">  {format(new Date(post.createdAt), "dd MMM, yyyy")}</time>
        
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          <Link href="#">{post.title}</Link>
        </h3>
        
        <p className="text-muted-foreground mb-2">{post.content}</p>
        
        <div className="flex items-center space-x-4 text-sm">
          <span className="text-muted-foreground">By {post.author?.name}</span>
          <Link href="#" className="text-primary hover:underline font-medium">
            {post.category?.nameCategory}
          </Link>
        </div>
      </div>
    </article>
  );
}