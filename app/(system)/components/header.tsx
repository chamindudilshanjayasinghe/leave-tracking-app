import { sign } from "crypto";
import { Bell, LogOut, Menu, Plus, Search } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function AppHeader() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Top Header */}
            <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 lg:px-8">
                <div className="flex items-center">
                    <button
                        className="p-2 -ml-2 mr-2 lg:hidden text-gray-600 hover:bg-gray-100 rounded-md"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
                </div>

                <div className="flex items-center gap-4">

                    <div className="hidden md:flex items-center relative">
                        <Search className="w-4 h-4 absolute left-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-9 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-64 transition-all"
                        />
                    </div>
                    <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                    </button>
                    <div className="h-8 w-px bg-gray-200 mx-2"></div>
                    <button
                        onClick={() => {
                            signOut(
                                {
                                    redirect: false,
                                }
                            );
                        }}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        <span className="hidden sm:inline">Sign Out</span>
                    </button>
                </div>
            </header>
        </>
    )
}