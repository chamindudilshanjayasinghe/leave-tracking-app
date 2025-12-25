import { Calendar, FileText, LayoutDashboard, Settings, Users, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { use, useState } from "react";

export default function AppSidebar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();
    const path = usePathname();
    const navigateTo = (route: string) => {
        router.push(route);
    }

    return (
        <>
            {/* Sidebar */}
            <aside className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-indigo-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="h-16 flex items-center px-6 border-b border-indigo-800">
                        <Calendar className="w-6 h-6 mr-3 text-indigo-300" />
                        <span className="text-xl font-bold tracking-wide">LeaveTrack</span>
                        <button
                            className="ml-auto lg:hidden text-indigo-300"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-1">
                        <a href="#" onClick={() => navigateTo('/dashboard')} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${path === '/dashboard' ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'}`}>
                            <LayoutDashboard className="w-5 h-5" />
                            <span className="font-medium">Dashboard</span>
                        </a>
                        <a href="#" onClick={() => navigateTo('/employees')} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${path === '/employees' ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'}`}>
                            <Users className="w-5 h-5" />
                            <span className="font-medium">Employees</span>
                        </a>
                        <a href="#" onClick={() => navigateTo('/calendar')} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${path === '/calendar' ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'}`}>
                            <Calendar className="w-5 h-5" />
                            <span className="font-medium">Calendar</span>
                        </a>
                        <a href="#" onClick={() => navigateTo('/reports')} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${path === '/reports' ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'}`}>
                            <FileText className="w-5 h-5" />
                            <span className="font-medium">Reports</span>
                        </a>
                      
                    </nav>

                    {/* User Profile Snippet */}
                    <div className="p-4 border-t border-indigo-800">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-bold border-2 border-indigo-400">
                                AD
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">Admin User</p>
                                <p className="text-xs text-indigo-300">View Profile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}