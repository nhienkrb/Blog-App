import PostDetail from "@/features/post-detail/components/PostDetail";

export default async function SinglePost(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params; 
  return <PostDetail slug={slug} />;
}
