'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.replace('/login');
  }, [router]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center">
            <Image
              src="/logo.png"
              alt="LeaveTrack Logo"
              width={150}
              height={150}
              className="mb-6"
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-center">
              Redirecting to Login...
            </h1>
            <p className="text-gray-600 text-sm md:text-base opacity-90 text-center">
              If you are not redirected automatically, please click the button below.
            </p>
            <button
              onClick={() => router.push('/login')}
              className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
