export default function Hero() {
  return (
    <section className="px-4 md:px-20 lg:px-40 py-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="@container">
          <div
            className="relative overflow-hidden rounded-xl h-[480px] flex flex-col items-center justify-center text-center p-6 bg-cover bg-center"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7AqaL_0gOL7WJGA041JJFLrSYvjL7A-aeRA5ZVMFEBs9aosZmQlaw-8hwnCDcrnKq5Wx1BVzdZyZQkroNJs8GblZ9T0mwYPywp_1MONXLIDYDnKkIAyvUOWimyb9GlAm8JOIsDkfBG3WUL_VAEVeop1u8qsUXEMOlsEk0lpjm0YZYiRHEz1LwnYl6HtsM4KlNhh0F6ykCMsoCC-opAFUQXNqa3wGfTSUYw1H5lqaK-3QPA1PMgtQeNAA_qC_e822wrjYEE9i0OJg")',
            }}
          >
            <div className="max-w-2xl flex flex-col gap-6">
              <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                Cita Rasa Otentik <span className="text-mustard"> Hadeon Spot (Jajanan Sederhana Nusantara)</span>
              </h1>
              <p className="text-white/90 text-base md:text-lg font-normal max-w-xl mx-auto">
                Nikmati kelezatan kuliner tradisional Indonesia yang diolah dengan
                resep warisan keluarga dan bahan berkualitas tinggi pilihan.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:scale-105 transition-transform shadow-xl shadow-black/20">
                  Lihat Menu
                </button>
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/10 backdrop-blur-md border border-white/30 text-white text-base font-bold hover:bg-white/20 transition-all">
                  Tentang Kami
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
