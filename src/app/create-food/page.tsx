"use client";

import { createFood } from "../_actions/foods";
import Link from "next/link";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="h-12 bg-[#f2c10d] text-[#221e10] font-bold rounded-xl hover:opacity-90 transition-opacity mt-4 disabled:opacity-50 flex items-center justify-center"
    >
      {pending ? "Menyimpan..." : "Simpan Makanan"}
    </button>
  );
}

export default function CreateFoodPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f5] dark:bg-[#221e10] p-6 md:p-12 font-display">
      <div className="max-w-3xl mx-auto bg-white dark:bg-[#2c2715] p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-white/5 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/foods"
            className="flex items-center text-sm font-bold text-slate-500 hover:text-[#f2c10d] transition-colors"
          >
            <span className="material-symbols-outlined mr-1">arrow_back</span>
            Kembali ke Menu
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-black mb-2 text-[#221e10] dark:text-white">
          Buat Menu Baru
        </h1>
        <p className="text-slate-500 dark:text-[#cbbe90] mb-10">
          Tambahkan hidangan baru ke dalam daftar menu restoran.
        </p>

        <form action={createFood} className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-[#cbbe90]">
              Nama Makanan
            </label>
            <input
              name="name"
              required
              className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:border-[#f2c10d] focus:ring-1 focus:ring-[#f2c10d] outline-none transition-all dark:text-white"
              placeholder="Contoh: Nasi Goreng Spesial"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-[#cbbe90]">
              Deskripsi
            </label>
            <textarea
              name="description"
              required
              className="w-full h-32 p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:border-[#f2c10d] focus:ring-1 focus:ring-[#f2c10d] outline-none transition-all dark:text-white resize-none"
              placeholder="Jelaskan rasa, tekstur, dan keunikan makanan ini..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-[#cbbe90]">
              URL Gambar
            </label>
            <input
              name="imageUrl"
              required
              className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:border-[#f2c10d] focus:ring-1 focus:ring-[#f2c10d] outline-none transition-all dark:text-white"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-[#cbbe90]">
              Bahan-bahan
            </label>
            <input
              name="ingredients"
              required
              className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:border-[#f2c10d] focus:ring-1 focus:ring-[#f2c10d] outline-none transition-all dark:text-white"
              placeholder="Contoh: Nasi, Telur, Kecap, Bawang"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-[#cbbe90]">
                Tipe Makanan
              </label>
              <div className="relative">
                <select
                  name="type"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:border-[#f2c10d] focus:ring-1 focus:ring-[#f2c10d] outline-none transition-all dark:text-white appearance-none cursor-pointer"
                >
                  <option value="upf" className="text-black">
                    Ultra Processed Food (UPF)
                  </option>
                  <option value="fresh" className="text-black">
                    Fresh Food
                  </option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-[#cbbe90]">
                Harga (Opsional)
              </label>
              <div className="relative">
                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">Rp</span>
                 <input
                    name="price"
                    type="number"
                    className="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:border-[#f2c10d] focus:ring-1 focus:ring-[#f2c10d] outline-none transition-all dark:text-white"
                    placeholder="0"
                />
              </div>
            </div>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
