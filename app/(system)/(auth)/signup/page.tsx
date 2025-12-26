'use client';
import { ArrowLeft, Building2, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomInput from "../../components/input";
import ButtonLoader from "../../components/buttonLoader";
import CustomButton from "../../components/CustomButton";
import apiClient from "@/lib/apiClient";
import { useForm } from "react-hook-form";
import { signupSchema } from "@/validation/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";


export default function SignUpPage() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

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

    // const handleSignupSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();

    //     setIsLoading(true);
    //     setError("");

    //     try {
    //         await apiClient.post("/auth/signup", {
    //             email: signupData.email,
    //             password: signupData.password,
    //             firstName: signupData.firstName,
    //             lastName: signupData.lastName,
    //             businessName: signupData.businessName,
    //         });
    //         router.replace("/login?signup=success");
    //     } catch (err: any) {
    //         // Axios error handling
    //         const message = err?.response?.data?.message || 'Signup failed. Please try again.';

    //         setError(message);
    //     } finally {
    //         // Always stop loader
    //         setIsLoading(false);
    //     }
    // };

    const onSubmit = async (data: any) => {
        setError("");
        try {
            await apiClient.post("/auth/signup", data);

            router.replace("/login?signup=success");

        } catch (err: any) {
            const message =
                err?.response?.data?.message ||
                "Signup failed. Please try again.";

            setError(message);
        }
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

                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Business Name */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 block">Business Name</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Building2 className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                            </div>
                            <CustomInput
                                type="text"
                                placeholder="Acme Inc."
                                error={errors.businessName?.message}
                                {...register("businessName")}
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
                                <CustomInput
                                    type="text"
                                    {...register("firstName")}
                                    error={errors.firstName?.message}
                                    placeholder="John"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700 block">Last Name</label>
                            <div className="relative group">
                                <CustomInput
                                    type="text"
                                    {...register("lastName")}
                                    error={errors.lastName?.message}
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
                            <CustomInput
                                type="email"
                                required
                                {...register("email")}
                                error={errors.email?.message}
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

                            <CustomInput
                                type={showPassword ? "text" : "password"}
                                required
                                {...register("password")}
                                error={errors.password?.message}
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
                    <CustomButton
                        type="submit"
                        className={`w-full flex items-center justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-md'}`}
                        fullWidth
                        isLoading={isLoading}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ButtonLoader />
                        ) : null}
                        {isLoading ? 'Creating Account...' : 'Sign Up'}
                    </CustomButton>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </form>
            </div>
        </>
    );
}