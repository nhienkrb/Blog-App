
export function CategoryList() {
  const categories = [
    "Engineering",
    "Product",
    "Design",
    "Tutorials",
    "AI",
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg transition-colors duration-300">
      <h3 className="text-xl font-bold mb-4">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <a
            key={index}
            href="#"
            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-brand hover:text-white transition-colors duration-200"
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
}