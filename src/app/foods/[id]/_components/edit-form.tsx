"use client";

import { updateFood, deleteFood } from "../../../_actions/foods";
import { Food } from "../../../types/food";
import Link from "next/link";
import { useFormStatus } from "react-dom";

function UpdateButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="h-12 bg-[#f2c10d] text-[#221e10] font-bold rounded-xl hover:opacity-90 transition-opacity flex-1 disabled:opacity-50 flex items-center justify-center"
    >
      {pending ? "Menyimpan..." : "Update Makanan"}
    </button>
  );
}

function DeleteButton() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        disabled={pending}
        className="h-12 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 font-bold rounded-xl hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors px-6 border border-red-200 dark:border-red-500/20 disabled:opacity-50"
      >
        {pending ? "..." : <span className="material-symbols-outlined">delete</span>}
      </button>
    );
}

export default function EditForm({ food }: { food: Food }) {
  const updateWithId = updateFood.bind(null, food.id);
  const deleteWithId = deleteFood.bind(null, food.id);

  return (
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

      <div className="flex justify-between items-start mb-10">
        <div>
            <h1 className="text-3xl md:text-4xl font-black mb-2 text-[#221e10] dark:text-white">
            Detail Makanan
            </h1>
            <p className="text-slate-500 dark:text-[#cbbe90]">
            Perbarui informasi atau hapus menu ini.
            </p>
        </div>
        <form action={deleteWithId}>
            <DeleteButton />
        </form>
      </div>


      <form action={updateWithId} className="flex flex-col gap-6">
        <div>
          <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-[#cbbe90]">
            Nama Makanan
          </label>
          <input
            name="name"
            defaultValue={food.name}
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
            defaultValue={food.description}
            required
            className="w-full h-32 p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:border-[#f2c10d] focus:ring-1 focus:ring-[#f2c10d] outline-none transition-all dark:text-white resize-none"
            placeholder="Jelaskan rasa, tekstur, dan keunikan makanan ini..."
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-[#cbbe90]">
            URL Gambar
          </label>
          <div className="flex flex-col gap-4">
             <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <img src={food.imageUrl} alt={food.name} className="w-full h-full object-cover" />
             </div>
             <input
                name="imageUrl"
                defaultValue={food.imageUrl}
                required
                className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:border-[#f2c10d] focus:ring-1 focus:ring-[#f2c10d] outline-none transition-all dark:text-white"
                placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-[#cbbe90]">
            Bahan-bahan
          </label>
          <input
            name="ingredients"
            defaultValue={food.ingredients}
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
                defaultValue={food.type}
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
                defaultValue={food.price || ""}
                className="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-200 dark:border-white/10 bg-transparent focus:border-[#f2c10d] focus:ring-1 focus:ring-[#f2c10d] outline-none transition-all dark:text-white"
                placeholder="0"
                />
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
           <UpdateButton />
        </div>
      </form>
    </div>
  );
}
