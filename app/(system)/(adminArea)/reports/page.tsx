'use client';
import { BarChart3, Calendar, Clock, Download, FileText, PieChart, TrendingUp } from "lucide-react";

const ReportsView = () => {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Leave Reports</h2>
                    <p className="text-gray-500 text-sm">Analyze leave trends and balances</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors">
                        <Download className="w-4 h-4" /> Export PDF
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors">
                        <FileText className="w-4 h-4" /> Export CSV
                    </button>
                </div>
            </div>

            {/* Top Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-gray-500">Utilization Rate</span>
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">84%</h3>
                    <p className="text-xs text-gray-500 mt-1">Leaves taken vs accrued this year</p>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
                        <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '84%' }}></div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-gray-500">Avg. Leave Duration</span>
                        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                            <Clock className="w-5 h-5" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">3.2 Days</h3>
                    <p className="text-xs text-gray-500 mt-1">Average days per leave request</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-gray-500">Peak Month</span>
                        <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                            <Calendar className="w-5 h-5" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">December</h3>
                    <p className="text-xs text-gray-500 mt-1">Highest leave volume recorded</p>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Department Breakdown */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-gray-400" />
                            Leave by Department
                        </h3>
                        <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-gray-50 focus:outline-none">
                            <option>This Year</option>
                            <option>Last Year</option>
                        </select>
                    </div>

                    <div className="space-y-4">
                        {[
                            { label: 'Engineering', value: '45%', color: 'bg-indigo-500' },
                            { label: 'Product', value: '25%', color: 'bg-emerald-500' },
                            { label: 'Sales', value: '20%', color: 'bg-amber-500' },
                            { label: 'Marketing', value: '10%', color: 'bg-rose-500' }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium text-gray-600">{item.label}</span>
                                    <span className="text-gray-500">{item.value}</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className={`h-2 rounded-full ${item.color}`} style={{ width: item.value }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Leave Type Distribution */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2">
                            <PieChart className="w-5 h-5 text-gray-400" />
                            Distribution by Type
                        </h3>
                    </div>

                    <div className="flex items-center justify-center gap-8 py-4">
                        {/* Visual Circle Representation using CSS Conic Gradient approximation/simple colored circles for legend */}
                        <div className="relative w-32 h-32 rounded-full border-12 border-indigo-100 flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border-12 border-indigo-600 border-l-transparent border-b-transparent transform rotate-45"></div>
                            <span className="text-2xl font-bold text-gray-800">124</span>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                                <span className="text-sm text-gray-600">Annual Leave (65%)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-200"></div>
                                <span className="text-sm text-gray-600">Sick Leave (25%)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                                <span className="text-sm text-gray-600">Unpaid (10%)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100 font-bold text-gray-800">
                    Monthly Overview
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-3 font-semibold">Month</th>
                                <th className="px-6 py-3 font-semibold">Requests</th>
                                <th className="px-6 py-3 font-semibold">Approved</th>
                                <th className="px-6 py-3 font-semibold">Rejected</th>
                                <th className="px-6 py-3 font-semibold text-right">Total Days</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-3 font-medium text-gray-900">October 2023</td>
                                <td className="px-6 py-3 text-gray-600">45</td>
                                <td className="px-6 py-3 text-green-600">42</td>
                                <td className="px-6 py-3 text-red-600">3</td>
                                <td className="px-6 py-3 text-right font-medium">120</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-3 font-medium text-gray-900">September 2023</td>
                                <td className="px-6 py-3 text-gray-600">38</td>
                                <td className="px-6 py-3 text-green-600">35</td>
                                <td className="px-6 py-3 text-red-600">3</td>
                                <td className="px-6 py-3 text-right font-medium">98</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-3 font-medium text-gray-900">August 2023</td>
                                <td className="px-6 py-3 text-gray-600">52</td>
                                <td className="px-6 py-3 text-green-600">50</td>
                                <td className="px-6 py-3 text-red-600">2</td>
                                <td className="px-6 py-3 text-right font-medium">156</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReportsView;