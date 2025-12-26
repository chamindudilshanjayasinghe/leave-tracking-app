'use client'
import { useEffect, useState } from "react";
import AppHeader from "../components/header";
import AppSidebar from "../components/sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "../components/loader";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { status } = useSession();
    const router = useRouter();


    // 🔐 Redirect side effect
    useEffect(() => {
        if (status === 'unauthenticated') {
            router.replace('/login');
        }
    }, [status, router]);

    // ⏳ Global session loading screen
    if (status === 'loading') {
        return (
            <Loader />
        );
    }

    // 🚫 While redirecting, render nothing
    if (status === 'unauthenticated') {
        return null;
    }

    // ✅ Authenticated layout
    return (<>
        <div className="min-h-screen bg-slate-50 flex font-sans">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <AppSidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

                {/* Top Header */}
                <AppHeader />

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    </>);
}