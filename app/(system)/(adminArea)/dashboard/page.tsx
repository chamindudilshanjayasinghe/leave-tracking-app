'use client';

import { Bell, Calendar, Check, CheckCircle, Clock, FileText, LayoutDashboard, LogOut, Menu, Plane, Plus, Search, Settings, Users, X, XCircle } from "lucide-react";
import { useState } from "react";
import EmployeeFormModal from "../../components/employee/addEmployee";
import AppHeader from "../../components/header";
import App from "../../(auth)/login/page";
import AppSidebar from "../../components/sidebar";


const MOCK_REQUESTS = [
    { id: 1, name: "Sarah Wilson", role: "UX Designer", type: "Annual Leave", dates: "Oct 24 - Oct 28", days: 5, status: "pending", avatar: "SW" },
    { id: 2, name: "Michael Chen", role: "Frontend Dev", type: "Sick Leave", dates: "Oct 24", days: 1, status: "pending", avatar: "MC" },
    { id: 3, name: "Emma Rodriguez", role: "Product Mgr", type: "Annual Leave", dates: "Nov 01 - Nov 15", days: 10, status: "approved", avatar: "ER" },
    { id: 4, name: "James Kim", role: "Backend Dev", type: "Personal", dates: "Oct 20", days: 1, status: "rejected", avatar: "JK" },
    { id: 5, name: "Lisa Park", role: "QA Engineer", type: "Sick Leave", dates: "Oct 23 - Oct 24", days: 2, status: "approved", avatar: "LP" },
];

type AdminDashboardProps = {
    onLogout: () => void;
};

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [requests, setRequests] = useState(MOCK_REQUESTS);
    const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);

    const handleAction = (id: number, action: string) => {
        setRequests(requests.map(req =>
            req.id === id ? { ...req, status: action === 'approve' ? 'approved' : 'rejected' } : req
        ));
    };

    return (
        <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Total Employees</p>
                        <h3 className="text-2xl font-bold text-gray-800 mt-1">124</h3>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-2 inline-block">+4% this month</span>
                    </div>
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                        <Users className="w-6 h-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">On Leave Today</p>
                        <h3 className="text-2xl font-bold text-gray-800 mt-1">8</h3>
                        <div className="flex -space-x-2 mt-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                            ))}
                        </div>
                    </div>
                    <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
                        <Plane className="w-6 h-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Pending Requests</p>
                        <h3 className="text-2xl font-bold text-gray-800 mt-1">12</h3>
                        <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full mt-2 inline-block">Requires attention</span>
                    </div>
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
                        <Clock className="w-6 h-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Avg. Balance</p>
                        <h3 className="text-2xl font-bold text-gray-800 mt-1">14 Days</h3>
                        <span className="text-xs text-gray-400 mt-2 block">Per employee</span>
                    </div>
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Recent Leave Requests Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">Recent Leave Requests</h2>
                        <p className="text-sm text-gray-500">Manage and track latest employee leave applications</p>
                    </div>
                    <div className="flex gap-2">
                        {/* Mobile Add Employee Button (visible only on small screens) */}
                        <button
                            onClick={() => setIsEmployeeModalOpen(true)}
                            className="md:hidden px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            Add
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            Filter
                        </button>
                        <button className="hidden md:block px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            Export Report
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                                <th className="px-6 py-4 font-semibold">Employee</th>
                                <th className="px-6 py-4 font-semibold">Leave Type</th>
                                <th className="px-6 py-4 font-semibold">Duration</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {requests.map((request) => (
                                <tr key={request.id} className="hover:bg-gray-50/80 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-linear-to-br from-indigo-100 to-purple-100 text-indigo-600 flex items-center justify-center text-xs font-bold border border-indigo-200">
                                                {request.avatar}
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm text-gray-900">{request.name}</p>
                                                <p className="text-xs text-gray-500">{request.role}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-gray-600">{request.type}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-700">{request.dates}</span>
                                            <span className="text-xs text-gray-500">{request.days} days</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                          ${request.status === 'approved' ? 'bg-green-100 text-green-800' : ''}
                          ${request.status === 'pending' ? 'bg-amber-100 text-amber-800' : ''}
                          ${request.status === 'rejected' ? 'bg-red-100 text-red-800' : ''}
                        `}>
                                            {request.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        {request.status === 'pending' ? (
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleAction(request.id, 'approve')}
                                                    className="p-1.5 text-green-600 hover:bg-green-50 rounded transition-colors"
                                                    title="Approve"
                                                >
                                                    <Check className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleAction(request.id, 'reject')}
                                                    className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                                                    title="Reject"
                                                >
                                                    <XCircle className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ) : (
                                            <span className="text-xs text-gray-400 italic">No actions</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <span>Showing 5 of 12 requests</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">Prev</button>
                        <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AdminDashboard;