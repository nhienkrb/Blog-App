import React from "react";

export function FeaturedTool() {
  return (
    <div className="bg-card border p-6 rounded-lg mb-8">
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
          A state-of-the-art text-to-image model that generates incredibly detailed and creative images from a simple prompt.
        </p>
      </a>
    </div>
  );
}