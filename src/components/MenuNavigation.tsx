import Link from "next/link";

export default function MenuNavigation() {
  return (
    <section
      id="menu"
      className="px-4 md:px-20 lg:px-40 sticky top-[64px] z-40 bg-background-light dark:bg-background-dark"
    >
      <div className="max-w-[1200px] mx-auto border-b border-[#e7cfd0] dark:border-white/10">
        <div className="flex overflow-x-auto no-scrollbar gap-8">
          <Link
            href="#"
            className="flex flex-col items-center justify-center border-b-[3px] border-primary text-[#1b0d0e] dark:text-white pb-[13px] pt-4 whitespace-nowrap"
          >
            <p className="text-sm font-bold tracking-[0.015em]">Sate Terpopuler</p>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-[#9a4c50] dark:text-white/50 hover:text-primary pb-[13px] pt-4 whitespace-nowrap transition-colors"
          >
            <p className="text-sm font-bold tracking-[0.015em]">Hidangan Berat</p>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-[#9a4c50] dark:text-white/50 hover:text-primary pb-[13px] pt-4 whitespace-nowrap transition-colors"
          >
            <p className="text-sm font-bold tracking-[0.015em]">
              Sides (Sampingan)
            </p>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-[#9a4c50] dark:text-white/50 hover:text-primary pb-[13px] pt-4 whitespace-nowrap transition-colors"
          >
            <p className="text-sm font-bold tracking-[0.015em]">
              Minuman & Lainnya
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
