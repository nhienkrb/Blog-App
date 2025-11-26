import { HeroSection } from "@/features/tutorials/components/HeroSection";
import { FilterBar } from "@/features/tutorials/components/FilterBar";
import { ArticleGrid } from "@/features/tutorials/components/ArticleGrid";
import { Sidebar } from "@/features/tutorials/components/Sidebar";
import { getAllPosts } from "@/features/action/action";

export default async function TutorialPage() {
  const allPost = await getAllPosts("Tutorials");
  const rawTags = allPost.flatMap((post) => post.postTags.map((pt) => pt.tag));
  const uniqueTags = Array.from(
  new Map(rawTags.map((tag) => [tag.id, tag])).values()
);
  return (
    <>
      <HeroSection />
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <FilterBar />
            <ArticleGrid posts={allPost} />
          </div>
          <Sidebar tags={uniqueTags} />
        </div>
      </main>
    </>
  );
}
