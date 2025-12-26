'use client';
import { ArrowLeft, Calendar, Check, CheckCircle, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotPasswordPage() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [resetSent, setResetSent] = useState(false);
    const [email, setEmail] = useState('');
    const router = useRouter();

    const backToLogin = () => {
        router.push('/login');
    }
    return (
        <>
            <div className="mb-6">
                <button
                    onClick={backToLogin}
                    className="flex items-center text-xs font-medium text-gray-500 hover:text-gray-800 mb-4 transition-colors"
                >
                    <ArrowLeft className="w-3 h-3 mr-1" /> Back to Login
                </button>
                <h2 className="text-2xl font-bold text-gray-800">Forgot Password?</h2>
                <p className="text-gray-500 text-sm mt-1">
                    No worries, we'll send you reset instructions.
                </p>
            </div>

            {!resetSent ? (
                <form onSubmit={() => { }} className="space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700 block">Email Address</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                            </div>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full pl-10 pr-3 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm outline-none"
                                placeholder="admin@company.com"
                            />
                        </div>
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
                        {isLoading ? 'Sending Link...' : 'Send Reset Link'}
                    </button>
                </form>
            ) : (
                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100 animate-in zoom-in-95 duration-300">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3 border-4 border-white shadow-sm">
                        <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-gray-900 font-bold mb-1">Check your email</h3>
                    <p className="text-sm text-gray-600 mb-6">
                        We sent a password reset link to <br />
                        <span className="font-medium text-gray-900">{email}</span>
                    </p>
                    <p className="text-xs text-gray-500 mb-6">
                        Didn't receive the email? <button onClick={() => setResetSent(false)} className="text-indigo-600 hover:underline">Click to resend</button>
                    </p>
                    <button
                        onClick={backToLogin}
                        className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Back to Sign In
                    </button>
                </div>
            )}
        </>
    );
}