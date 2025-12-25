'use client';
import { useState } from "react";
import { UserPlus, Search, Edit, Trash2 } from "lucide-react";
import EmployeeFormModal from "../../components/employee/addEmployee";

const MOCK_EMPLOYEES = [
  { id: 1, first_name: "Sarah", last_name: "Wilson", email: "sarah.w@company.com", role: "UX Designer", department: "Design", status: "Active", join_date: "2022-03-15", avatar: "SW" },
  { id: 2, first_name: "Michael", last_name: "Chen", email: "m.chen@company.com", role: "Frontend Dev", department: "Engineering", status: "Active", join_date: "2021-11-01", avatar: "MC" },
  { id: 3, first_name: "Emma", last_name: "Rodriguez", email: "emma.r@company.com", role: "Product Mgr", department: "Product", status: "On Leave", join_date: "2020-05-20", avatar: "ER" },
  { id: 4, first_name: "James", last_name: "Kim", email: "j.kim@company.com", role: "Backend Dev", department: "Engineering", status: "Active", join_date: "2022-08-10", avatar: "JK" },
  { id: 5, first_name: "Lisa", last_name: "Park", email: "lisa.p@company.com", role: "QA Engineer", department: "Engineering", status: "Inactive", join_date: "2023-01-15", avatar: "LP" },
  { id: 6, first_name: "Robert", last_name: "Fox", email: "robert.f@company.com", role: "HR Manager", department: "Human Resources", status: "Active", join_date: "2019-09-12", avatar: "RF" },
];


const EmployeeList = () => {
  const [employees] = useState(MOCK_EMPLOYEES);
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);

  return (
    <>
      {/* Employee Modal */}
      <EmployeeFormModal
        isOpen={isEmployeeModalOpen}
        onClose={() => setIsEmployeeModalOpen(false)}
      />
      <div className="space-y-6 animate-in fade-in duration-500">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Employees</h2>
            <p className="text-gray-500 text-sm">Manage access and personal details</p>
          </div>
          <button
            onClick={() => setIsEmployeeModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm self-start sm:self-auto"
          >
            <UserPlus className="w-4 h-4" />
            <span>Add Employee</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Filters Bar */}
          <div className="p-4 border-b border-gray-100 flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search employees..."
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                  <th className="px-6 py-4 font-semibold">Name</th>
                  <th className="px-6 py-4 font-semibold">Role</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Joined</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {employees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold border border-slate-200">
                          {emp.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-sm text-gray-900">{emp.first_name} {emp.last_name}</p>
                          <p className="text-xs text-gray-500">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm text-gray-900 font-medium">{emp.role}</p>
                      <p className="text-xs text-gray-500">{emp.department}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                       ${emp.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                       ${emp.status === 'On Leave' ? 'bg-amber-100 text-amber-800' : ''}
                       ${emp.status === 'Inactive' ? 'bg-gray-100 text-gray-800' : ''}
                     `}>
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {emp.join_date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors"><Edit className="w-4 h-4" /></button>
                        <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
            <span>Showing 1-6 of 24 employees</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">Prev</button>
              <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;