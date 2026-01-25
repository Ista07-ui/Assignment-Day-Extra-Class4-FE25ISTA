export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-black/5 dark:border-white/5 py-12 px-4 md:px-20 lg:px-40">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-primary">
            <div className="size-8 flex items-center justify-center bg-primary text-white rounded-lg">
              <span className="material-symbols-outlined">restaurant</span>
            </div>
            <h2 className="text-[#1b0d0e] dark:text-white text-xl font-black">
              Hadeon Spot
            </h2>
          </div>
          <p className="text-[#9a4c50] dark:text-white/60 text-sm leading-relaxed">
            Menghadirkan kelezatan jajanan kaki lima dengan kualitas bintang
            lima. Warisan rasa Nusantara di setiap gigitan.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-[#1b0d0e] dark:text-white font-bold text-base">
            Jam Operasional
          </h4>
          <div className="flex flex-col gap-2 text-sm text-[#9a4c50] dark:text-white/60">
            <div className="flex justify-between">
              <span>Senin - Jumat</span> <span>08:00 - 21:00</span>
            </div>
            <div className="flex justify-between">
              <span>Sabtu - Minggu</span> <span>09:00 - 22:00</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-[#1b0d0e] dark:text-white font-bold text-base">
            Hubungi Kami
          </h4>
          <div className="flex flex-col gap-3 text-sm text-[#9a4c50] dark:text-white/60">
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                location_on
              </span>{" "}
              Jl. Rasa Sayange No. 12, Jakarta Selatan
            </p>
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                call
              </span>{" "}
              +62 812-3456-7890
            </p>
            <div className="flex gap-4 mt-2">
              <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">share</span>
              </div>
              <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">mail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-12 pt-6 border-t border-black/5 dark:border-white/5 text-center text-[12px] text-[#9a4c50] dark:text-white/40">
        © 2026 Hadeon Spot. Jajanan Sederhana dibuat dengan cinta untuk Kuliner Indonesia.
      </div>
    </footer>
  );
}
