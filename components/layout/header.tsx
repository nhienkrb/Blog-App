"use client";
import { LogoutButton } from "@/app/(auth)/logout/page";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
interface User {
  id: string;
  email: string;
  isAdmin: boolean;
}

interface HeaderProps {
  user: User | null; 
}
export default function Header({ user }: HeaderProps) {
  return (
    <>
     <header className="bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-700 sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">TechBlog</Link>

            <div className="hidden md:flex items-center space-x-6">
                <nav className="space-x-8">
                    <Link href="/posts" className="text-gray-600 dark:text-gray-300 hover:text-brand font-medium transition-colors duration-200">All Posts</Link>
                    <Link href="/engineers" className="text-gray-600 dark:text-gray-300 hover:text-brand font-medium transition-colors duration-200">Engineering</Link>
                    <Link href="/designs" className="text-gray-600 dark:text-gray-300 hover:text-brand font-medium transition-colors duration-200">Design</Link>
                    <Link href="/tutorials" className="text-gray-600 dark:text-gray-300 hover:text-brand font-medium transition-colors duration-200">Tutorials</Link>
                    {user?.isAdmin === true && (
                    <Link href="/admin" className="text-blue-600 dark:text-blue-400 font-bold transition-colors duration-200">
                    Admin
                    </Link>
                          )}
                </nav>
                
                {user ? (<LogoutButton/>) : (  <Link href="/login" className="bg-brand text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    Login
                </Link>) }
              
                <ModeToggle/>

            </div>

                {/* ===== Mobile ====  */}
            <div className="flex items-center space-x-3 md:hidden">
                    {user ? (user.email) : (  <Link href="/login" className="bg-brand text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    Login
                </Link>) }
              
                <ModeToggle/>
                <button className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                </button>
            </div>
        </div>
    </header>

    </>
  );
}
