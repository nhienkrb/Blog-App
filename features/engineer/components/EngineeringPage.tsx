import { getAllPosts } from "@/features/action/action";
import { PageHeader } from "./PageHeader";
import { Timeline } from "./Timeline";

export default async function EngineeringPage() {
  const allPost = await getAllPosts("engineering");

  return (
    <main className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <PageHeader
            title="Engineering"
            description="A chronological log of our technical challenges, breakthroughs, and deep dives."
          />
          <Timeline posts={allPost} />
        </div>
        <aside className="lg:w-1/3 lg:sticky lg:top-24 h-fit space-y-8">
          ád
        </aside>
      </div>
    </main>
  );
}
