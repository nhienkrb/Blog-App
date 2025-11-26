
interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "fa-tachometer-alt" },
    { id: "posts", label: "Quản lý Bài viết", icon: "fa-newspaper" },
    { id: "users", label: "Quản lý Nhân viên", icon: "fa-users" },
    { id: "comments", label: "Bình luận", icon: "fa-comments" },
    { id: "settings", label: "Cài đặt", icon: "fa-cog" },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md shrink-0 flex flex-col transition-colors duration-200">
      <nav className="mt-6 flex-1">
        {menuItems.map((item) => (
          <button
            key={item.id}   
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center px-6 py-3 transition-colors ${
              activeTab === item.id
                ? "bg-blue-600 text-white"
                : "text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600"
            }`}
          >
            <i className={`fas ${item.icon} w-5`}></i>
            <span className="mx-3 font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}