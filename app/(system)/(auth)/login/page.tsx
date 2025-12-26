'use client';
import React, { use, useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Calendar, CheckCircle, ArrowRight, Plane } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CustomInput from '../../components/input';
import CustomButton from '../../components/CustomButton';

/**
 * LoginPage Component
 * * This is the main component you asked for. 
 * You can copy this function and the imports above to use it in your project.
 */
type LoginPageProps = {
  onLoginSuccess: () => void;
};

const LoginPage = ({ onLoginSuccess }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (email && password.length >= 6) {
        onLoginSuccess();
      } else {
        setError('Invalid credentials. Password must be at least 6 characters.');
      }
    }, 1500);
  };

  const navigateTo = (route: string) => {
    router.push(route);
  }

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-gray-500 text-sm mt-1">Please enter your details to sign in.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Field */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700 block">Email Address</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            <CustomInput placeholder='you@company.com' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700 block">Password</label>
            <a href="#" onClick={() => navigateTo('/reset-password')} className="text-xs font-medium text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            <CustomInput
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600 flex items-center gap-2 animate-pulse">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            {error}
          </div>
        )}

        {/* Submit Button */}
        <CustomButton
          type="submit"
          isLoading={isLoading}
          loadingText="Signing in..."
        >
          Sign in
        </CustomButton>
      </form>

      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500">
          Don't have an business account?{' '}
          <button
            onClick={() => { navigateTo('/signup'); setError(''); }}
            className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
          >
            Create Account
          </button>
        </p>
      </div>
    </>
  );
};


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const loginSuccessHandler = () => {
    setIsLoggedIn(true);
    router.push('/dashboard');
  }

  return (
    <>
      <LoginPage onLoginSuccess={loginSuccessHandler} />
    </>
  );
}