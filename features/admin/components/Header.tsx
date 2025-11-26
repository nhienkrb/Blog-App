interface User {
  id: string;
  email: string;
}

interface HeaderProps {
  user: User | null; 
}
export function Header({ user }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm z-10 transition-colors duration-200">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Dashboard
        </h1>
        
        <div className="flex items-center space-x-4">
          {/* Khu vực User Profile */}
          <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="text-right hidden md:block">
              <div className="text-sm font-medium text-gray-900 dark:text-white">{user?.email}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Super Admin</div>
            </div>
            <img 
              src="https://placehold.co/40x40" 
              alt="Admin" 
              className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-600" 
            />
          </div>
        </div>
      </div>
    </header>
  );
}