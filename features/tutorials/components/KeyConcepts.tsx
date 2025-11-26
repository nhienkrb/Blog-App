import React from "react";

export function KeyConcepts() {
  const concepts = [
    "Neural Networks",
    "Deep Learning",
    "Generative AI",
    "Reinforcement Learning",
  ];

  return (
    <div className="bg-card border p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Key Concepts</h3>
      <div className="flex flex-wrap gap-2">
        {concepts.map((concept, index) => (
          <a
            key={index}
            href="#"
            className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium hover:bg-secondary/80"
          >
            {concept}
          </a>
        ))}
      </div>
    </div>
  );
}