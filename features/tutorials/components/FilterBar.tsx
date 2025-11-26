export function FilterBar() {
  const filters = ["All", "Machine Learning", "NLP", "Computer Vision", "AI Ethics"];
  
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {filters.map((filter, index) => (
        <button
          key={index}
          className={`filter-btn px-4 py-2 rounded-full font-medium transition-colors ${
            index === 0 
              ? "bg-primary text-primary-foreground" 
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}