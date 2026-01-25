import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-solid border-primary/10 px-4 md:px-20 lg:px-40 py-3">
      <div className="flex items-center justify-between whitespace-nowrap max-w-[1200px] mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 text-primary">
            <div className="size-8 flex items-center justify-center bg-primary text-white rounded-lg">
              <span className="material-symbols-outlined">restaurant</span>
            </div>
            <h2 className="text-[#1b0d0e] dark:text-white text-xl font-black leading-tight tracking-tight">
              Hadeon Spot 
            </h2>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              className="text-[#1b0d0e] dark:text-white text-sm font-bold border-b-2 border-primary leading-normal"
              href="/"
            >
              Beranda
            </Link>
            <Link
              className="text-[#1b0d0e]/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors"
              href="#menu"
            >
              Menu
            </Link>
            <Link
              className="text-[#1b0d0e]/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors"
              href="#"
            >
              Tentang Kami
            </Link>
            <Link
              className="text-[#1b0d0e]/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors"
              href="#"
            >
              Kontak
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-4 items-center">
          <label className="hidden lg:flex flex-col min-w-40 h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#f3e7e8] dark:bg-[#3d1f21]">
              <div className="text-primary flex items-center justify-center pl-4">
                <span className="material-symbols-outlined text-[20px]">
                  search
                </span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-[#1b0d0e] dark:text-white placeholder:text-[#9a4c50] px-4 pl-2 text-sm font-normal focus:outline-none"
                placeholder="Cari menu favorit..."
              />
            </div>
          </label>
          <Link href="/login">
            <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-white border border-primary text-primary text-sm font-bold hover:bg-primary/5 transition-colors">
              Masuk
            </button>
          </Link>
          <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-red-700 transition-colors shadow-lg shadow-primary/20">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </header>
  );
}
