export function TableOfContents() {
  const items = [
    "Cơ bản TypeScript",
    "Data types",
    "Interfaces",
    "Classes",
    "Functions",
    "Generics",
    "Modules",
  ];

  return (
    <aside className="lg:w-1/3 lg:sticky lg:top-24 h-fit">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="text-xl font-bold mb-6 border-b pb-2 text-gray-900">MỤC LỤC</h3>
        <nav>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={`#section-${index}`} 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-gray-400 group-hover:text-blue-600 transition-colors"></i>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}