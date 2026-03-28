import Link from "next/link";
import { getFoods } from "../_actions/foods";
import { Food } from "../types/food";

export const dynamic = "force-dynamic";

export default async function ListFoodPage() {
  const foods = await getFoods();

  return (
    <div className="layout-container flex flex-col min-h-screen bg-[#f8f8f5] dark:bg-[#221e10] font-display text-slate-900 dark:text-white">
      {/* TopNavBar Component */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#f8f8f5]/80 dark:bg-[#221e10]/80 backdrop-blur-md px-6 md:px-10 lg:px-40 py-3">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4">
            <div className="size-8 text-[#f2c10d]">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight hidden sm:block">
              Hadeon Spot
            </h2>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4 md:gap-8">
            <nav className="hidden md:flex items-center gap-9">
              <a
                className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
                href="#"
              >
                Dashboard
              </a>
              <a
                className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
                href="#"
              >
                Orders
              </a>
              <Link
                className="text-sm font-medium text-[#f2c10d]"
                href="/foods"
              >
                Foods
              </Link>
            </nav>
            <Link href="/create-food">
              <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#f2c10d] text-[#221e10] text-sm font-bold transition-transform active:scale-95">
                <span className="truncate">Tambah Makanan</span>
              </button>
            </Link>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#f2c10d]/20"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAH-1JMDy_OxqQ5krTlwx1TgkPW-XpGdBuGHBGCJ0ZXO4p_jvU-8lD4dXG6tmOOBSR46jVmNqt952YhEcuYLZvORtv4mdpnML5M3ewVGrq4gGNOg9UtHh1ab5GeLGjleA8c3JFPoF6anpzs9HtPH6k4qGuwMk2H9i6dboIU4ToPJ6ssa0eavUty01Nj6gbSnQxZZoFXKGKM4TZeqVj-8qs2twrzm0qdChFgkOXDgepNuQ6BfQQ24UQtc_wOlWQKGPgW29YJ0GQofQg")',
              }}
            ></div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col max-w-[1200px] mx-auto w-full px-6 md:px-10 lg:px-40 py-8">
        {/* PageHeading Component */}
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-black leading-tight tracking-tight">
              Manajemen Menu
            </h1>
            <p className="text-slate-500 dark:text-[#cbbe90] text-base">
              Kelola daftar menu makanan dan stok operasional Anda
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium bg-[#f2c10d]/10 text-[#f2c10d] px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm">
              inventory_2
            </span>
            <span>{foods.length} Total Jajanan</span>
          </div>
        </div>
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* SearchBar Component */}
          <div className="flex-1">
            <label className="flex flex-col w-full">
              <div className="flex w-full items-stretch rounded-xl h-12 bg-white dark:bg-[#494022]/40 border border-slate-200 dark:border-white/5 overflow-hidden focus-within:ring-2 focus-within:ring-[#f2c10d]/50 transition-all">
                <div className="text-slate-400 dark:text-[#cbbe90] flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="w-full bg-transparent border-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#cbbe90] px-4 text-base focus:ring-0 focus:outline-none"
                  placeholder="Cari jajanan berdasarkan nama atau kategori..."
                />
              </div>
            </label>
          </div>
          {/* Chips Component */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <div className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f2c10d] px-5 cursor-pointer text-[#221e10] font-bold">
              <p className="text-sm">Semua</p>
            </div>
            <div className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-[#494022]/40 border border-slate-200 dark:border-white/5 px-5 cursor-pointer hover:bg-slate-100 dark:hover:bg-[#494022] transition-colors">
              <p className="text-sm font-medium">Makanan</p>
            </div>
          </div>
        </div>

        {/* ImageGrid / Food List Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food: Food) => (
            <Link
              href={`/foods/${food.id}`}
              key={food.id}
              className="group flex flex-col bg-white dark:bg-[#2c2715] rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 cursor-pointer hover:border-[#f2c10d]/50 transition-all hover:shadow-xl hover:shadow-[#f2c10d]/5"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${food.imageUrl}")`,
                  }}
                ></div>
                <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                  {food.type === "fresh" ? "Fresh" : "UPF"}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold group-hover:text-[#f2c10d] transition-colors line-clamp-1">
                    {food.name}
                  </h3>
                  {food.price && (
                    <span className="text-[#f2c10d] font-bold">
                      Rp {food.price.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-slate-500 dark:text-[#cbbe90] text-sm leading-relaxed line-clamp-2">
                  {food.description}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {new Date(food.createdAt).toLocaleDateString()}
                  </span>
                  <div className="flex gap-2">
                    <button className="text-[#f2c10d] font-medium text-sm">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {foods.length === 0 && (
            <div className="col-span-full py-10 flex flex-col items-center justify-center text-center">
              <p className="text-slate-500 text-lg">
                Belum ada makanan tersimpan.
              </p>
              <Link
                href="/create-food"
                className="mt-4 text-[#f2c10d] hover:underline"
              >
                Buat Makanan Baru
              </Link>
            </div>
          )}
        </div>

        {/* Footer Pagination - placeholder for now */}
        <div className="mt-12 flex justify-center items-center gap-4">
          {/* Pagination controls if needed */}
        </div>
      </main>

      <footer className="border-t border-slate-200 dark:border-white/5 py-8 mt-12 bg-white/50 dark:bg-black/20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">
            © 2026 Jajanan Sederhana - Hadeon Spot
          </p>
        </div>
      </footer>
    </div>
  );
}
