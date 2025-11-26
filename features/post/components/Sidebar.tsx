import { AboutWidget } from "./AboutWidget";
import { CategoryList } from "./CategoryList";

export function Sidebar() {
  return (
    <aside className="lg:w-1/3 lg:sticky lg:top-24 h-fit space-y-8">
      <AboutWidget />
      <CategoryList />
    </aside>
  );
}