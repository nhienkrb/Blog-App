import { Tag } from "@prisma/client";

interface TagProps {
  tags: Tag[];
}

export function Sidebar({ tags }: TagProps) {
  return (
    <aside className="lg:w-1/3 lg:sticky lg:top-24 h-fit space-y-8">
      <div className="bg-card border p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <i className="fas fa-robot text-2xl mr-3 text-primary"></i>
          Featured AI Tool
        </h3>
        <a href="#" className="block group">
          <img
            src="https://placehold.co/300x150"
            alt="Tool preview"
            className="w-full rounded-lg mb-3 group-hover:opacity-90 transition-opacity"
          />
          <h4 className="font-bold group-hover:text-primary transition-colors">
            Stable Diffusion XL
          </h4>
          <p className="text-sm text-muted-foreground">
            A state-of-the-art text-to-image model that generates incredibly
            detailed and creative images from a simple prompt.
          </p>
        </a>
      </div>

      {/* Key Concepts Widget */}
      <div className="bg-card border p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Key Concepts</h3>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, idx) => (
            <a
              key={idx}
              href="#"
              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium hover:bg-secondary/80"
            >
              {tag.name}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
