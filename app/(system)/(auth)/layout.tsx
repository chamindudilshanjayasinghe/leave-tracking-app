'use client';

import { Calendar, CheckCircle } from "lucide-react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans">
                <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    {/* Left Side - Hero / Branding (Static) */}
                    <div className="md:w-1/2 bg-indigo-600 p-8 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-10 -translate-y-10"></div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full translate-x-10 translate-y-10"></div>

                        <div className="z-10">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold tracking-wide">LeaveTrack</span>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                Manage your time off with ease.
                            </h1>
                            <p className="text-indigo-100 text-sm md:text-base opacity-90">
                                Streamline your leave requests, track balances, and plan your holidays all in one place.
                            </p>
                        </div>

                        <div className="z-10 mt-8 md:mt-0">
                            <div className="flex items-center gap-2 text-indigo-200 text-sm">
                                <CheckCircle className="w-4 h-4" />
                                <span>Instant Approval Workflows</span>
                            </div>
                            <div className="flex items-center gap-2 text-indigo-200 text-sm mt-2">
                                <CheckCircle className="w-4 h-4" />
                                <span>Calendar Integration</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Dynamic Form Content */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <div className="animate-in fade-in duration-300">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}