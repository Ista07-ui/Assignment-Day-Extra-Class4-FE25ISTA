"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    router.push("/list-food");
  };

  return (
    <>
      <Header />
      <main className="relative z-10 flex flex-1 items-center justify-center p-6 bg-background-light dark:bg-background-dark min-h-[calc(100vh-140px)]">
        {/* Watermark Background Logo */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] w-[600px] h-[600px] z-0 pointer-events-none text-primary">
          <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
          </svg>
        </div>

        <div className="w-full max-w-[480px] bg-white dark:bg-zinc-900 shadow-xl rounded-xl border border-gray-100 dark:border-zinc-800 overflow-hidden relative z-10">
          {/* Headline & Body Text */}
          <div className="px-8 pt-10 pb-6 text-center">
            <h1 className="text-gray-900 dark:text-white text-3xl font-bold tracking-tight mb-2">
              Admin Login
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              Silakan masuk untuk mengelola menu jajanan.
            </p>
          </div>
          {/* Login Form */}
          <form className="px-8 pb-10 space-y-6" onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                Alamat Email
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    mail
                  </span>
                </div>
                <input
                  className="w-full pl-11 pr-4 h-14 bg-background-light dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                  placeholder="admin@jajanan.com"
                  type="email"
                />
              </div>
            </div>
            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                  Kata Sandi
                </label>
                <a
                  className="text-xs text-primary font-semibold hover:underline"
                  href="#"
                >
                  Lupa kata sandi?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    lock
                  </span>
                </div>
                <input
                  className="w-full pl-11 pr-12 h-14 bg-background-light dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                  placeholder="Masukkan kata sandi"
                  type="password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <span className="material-symbols-outlined text-xl">
                    visibility
                  </span>
                </button>
              </div>
            </div>
            {/* Remember Me Checkbox (Bonus) */}
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2 dark:bg-zinc-800 dark:border-zinc-700"
                id="remember"
                type="checkbox"
              />
              <label
                className="text-sm text-gray-600 dark:text-gray-400"
                htmlFor="remember"
              >
                Ingat perangkat ini
              </label>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-14 bg-primary hover:bg-red-700 text-white text-base font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Masuk Sekarang</span>
              <span className="material-symbols-outlined text-xl">login</span>
            </button>
            <div className="text-center">
               <p className="text-sm text-gray-600 dark:text-gray-400">
                  Belum punya akun?{" "}
                  <Link href="/register" className="text-primary font-bold hover:underline">
                    Daftar di sini
                  </Link>
               </p>
            </div>
            {/* Secure Integration Notice */}
            <div className="pt-4 flex items-center justify-center gap-4 border-t border-gray-100 dark:border-zinc-800">
              <div className="flex items-center gap-1.5 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Powered by
                </span>
                <div className="flex gap-2 items-center">
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                    Supabase
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                    Prisma
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
