'use client';
import { ArrowLeft, Building2, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    // Signup State
    const [signupData, setSignupData] = useState({
        businessName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value
        });
    };

    const backToLogin = () => {
        router.push('/login');
    }
    return (
        <>
            <div className="animate-in fade-in duration-300">
                <div className="mb-6">
                    <button
                        onClick={() => { backToLogin(); setError(''); }}
                        className="flex items-center text-xs font-medium text-gray-500 hover:text-gray-800 mb-4 transition-colors"
                    >
                        <ArrowLeft className="w-3 h-3 mr-1" /> Back to Login
                    </button>
                    <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
                    <p className="text-gray-500 text-sm mt-1">Get started with your free company account.</p>
                </div>

                <form onSubmit={() => { }} className="space-y-4">

                    {/* Business Name */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 block">Business Name</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Building2 className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                            </div>
                            <input
                                type="text"
                                name="businessName"
                                required
                                value={signupData.businessName}
                                onChange={handleSignupChange}
                                className="block w-full pl-10 pr-3 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm outline-none"
                                placeholder="Acme Inc."
                            />
                        </div>
                    </div>

                    {/* Name Fields Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700 block">First Name</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    value={signupData.firstName}
                                    onChange={handleSignupChange}
                                    className="block w-full pl-10 pr-3 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm outline-none"
                                    placeholder="John"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700 block">Last Name</label>
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    value={signupData.lastName}
                                    onChange={handleSignupChange}
                                    className="block w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm outline-none"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 block">Work Email</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                required
                                value={signupData.email}
                                onChange={handleSignupChange}
                                className="block w-full pl-10 pr-3 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm outline-none"
                                placeholder="you@company.com"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 block">Password</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                value={signupData.password}
                                onChange={handleSignupChange}
                                className="block w-full pl-10 pr-10 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm outline-none"
                                placeholder="Create a password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Must be at least 6 characters long.</p>
                    </div>

                    {error && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600 flex items-center gap-2 animate-pulse">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex items-center justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-md'
                            }`}
                    >
                        {isLoading ? (
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : null}
                        {isLoading ? 'Creating Account...' : 'Sign Up'}
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </form>
            </div>
        </>
    );
}