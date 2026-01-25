import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12 bg-background-light dark:bg-background-dark min-h-[calc(100vh-140px)]">
        <div className="w-full max-w-[480px] bg-white dark:bg-[#2d1616] rounded-xl shadow-xl border border-[#e7cfcf] dark:border-[#3d2020] overflow-hidden">
          {/* Header inside Card */}
          <div className="pt-8 pb-4 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <span className="material-symbols-outlined text-primary text-4xl">
                  person_add
                </span>
              </div>
            </div>
            <h1 className="text-[#1b0d0d] dark:text-white text-2xl font-bold px-4">
              Daftar Admin Baru
            </h1>
            <p className="text-[#6b3a3a] dark:text-[#a18282] text-sm font-normal px-8 mt-2">
              Buat akun baru untuk mengelola menu dan pesanan pelanggan.
            </p>
          </div>
          {/* Form */}
          <form className="px-8 pb-8 space-y-4">
            {/* Full Name Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#1b0d0d] dark:text-white text-sm font-medium">
                Nama Lengkap
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9a4c4c] text-xl">
                  person
                </span>
                <input
                  className="form-input w-full pl-10 pr-4 rounded-lg text-[#1b0d0d] dark:text-white border-[#e7cfcf] dark:border-[#3d2020] bg-background-light dark:bg-[#1b0d0d] focus:border-primary focus:ring-0 h-12 placeholder:text-[#9a4c4c]/60 text-base"
                  placeholder="Masukkan nama lengkap Anda"
                  type="text"
                />
              </div>
            </div>
            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#1b0d0d] dark:text-white text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9a4c4c] text-xl">
                  mail
                </span>
                <input
                  className="form-input w-full pl-10 pr-4 rounded-lg text-[#1b0d0d] dark:text-white border-[#e7cfcf] dark:border-[#3d2020] bg-background-light dark:bg-[#1b0d0d] focus:border-primary focus:ring-0 h-12 placeholder:text-[#9a4c4c]/60 text-base"
                  placeholder="admin@jajanan.com"
                  type="email"
                />
              </div>
            </div>
            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#1b0d0d] dark:text-white text-sm font-medium">
                Kata Sandi
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9a4c4c] text-xl">
                  lock
                </span>
                <input
                  className="form-input w-full pl-10 pr-10 rounded-lg text-[#1b0d0d] dark:text-white border-[#e7cfcf] dark:border-[#3d2020] bg-background-light dark:bg-[#1b0d0d] focus:border-primary focus:ring-0 h-12 placeholder:text-[#9a4c4c]/60 text-base"
                  placeholder="••••••••"
                  type="password"
                />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#9a4c4c] text-xl cursor-pointer">
                  visibility
                </span>
              </div>
            </div>
            {/* Confirm Password Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[#1b0d0d] dark:text-white text-sm font-medium">
                Konfirmasi Kata Sandi
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9a4c4c] text-xl">
                  lock_reset
                </span>
                <input
                  className="form-input w-full pl-10 pr-10 rounded-lg text-[#1b0d0d] dark:text-white border-[#e7cfcf] dark:border-[#3d2020] bg-background-light dark:bg-[#1b0d0d] focus:border-primary focus:ring-0 h-12 placeholder:text-[#9a4c4c]/60 text-base"
                  placeholder="Ulangi kata sandi"
                  type="password"
                />
              </div>
            </div>
            {/* Submit Button */}
            <button
              className="w-full bg-primary text-white font-bold h-12 rounded-lg mt-4 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              type="submit"
            >
              <span className="material-symbols-outlined text-lg">
                how_to_reg
              </span>
              Daftar
            </button>
            {/* Redirect Link */}
            <div className="text-center pt-4">
              <p className="text-sm text-[#6b3a3a] dark:text-[#a18282]">
                Sudah punya akun?{" "}
                <Link
                  className="text-primary font-bold hover:underline"
                  href="/login"
                >
                  Login di sini
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
