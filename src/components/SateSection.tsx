export default function SateSection() {
  return (
    <section className="px-4 md:px-20 lg:px-40 py-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between px-4 pb-6">
          <h2 className="text-[#1b0d0e] dark:text-white text-2xl font-black tracking-tight">
            Sate Pilihan
          </h2>
          <span className="text-primary font-bold text-sm cursor-pointer hover:underline">
            Lihat Semua
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {/* Sate Item 1 */}
          <div className="group flex flex-col gap-4 bg-white dark:bg-white/5 p-4 rounded-xl border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <div className="absolute top-2 right-2 z-10 bg-mustard text-background-dark text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px] fill-current">
                  star
                </span>{" "}
                BEST SELLER
              </div>
              <div
                className="w-full h-full bg-center bg-cover transform group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5vg_FNWXJExL1ZI4t7DOvJ3Aa9MNbR_uisrUCFdaJjKBZ047jl1mCH0iU7r5_kbKOXXLmVJtmC09jPuSRlP_xtJw5NXUcqeuJ3vGK8EceBr82GkGMcX2Xouqz3kiK0ZugHwE0tTORVEQYhZW9Q-OuvCBDIGfj0P4Mqeg6VEaSi9aJqKMkwKSKyg6_aRrC57Uv9tYUqZEJdsNCyRl6eHNTdd2C00KSMclXVZ0VeekOA7WqafgNuqs3KqzU5_U-zt5ocL_U2u11qYQ")',
                }}
              ></div>
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-[#1b0d0e] dark:text-white text-lg font-bold">
                  Sate Ayam Madura
                </h3>
                <span className="text-primary font-bold">Rp 25.000</span>
              </div>
              <p className="text-[#9a4c50] dark:text-white/60 text-sm font-normal leading-relaxed mb-4 line-clamp-2">
                Sate ayam pilihan dengan bumbu kacang kental khas Madura,
                disajikan dengan lontong dan acar segar.
              </p>
              <button className="w-full py-2 rounded-lg border-2 border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  add_shopping_cart
                </span>{" "}
                Tambah ke Keranjang
              </button>
            </div>
          </div>
          {/* Sate Item 2 */}
          <div className="group flex flex-col gap-4 bg-white dark:bg-white/5 p-4 rounded-xl border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <div
                className="w-full h-full bg-center bg-cover transform group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCp6T9Mtanb2StBGxMWK-ezojM_t-JGP6oRTxEENPOE3ThByxcwHOFKFEUTduHku64n6YjGN3uPV-htTWdmS5y787bPJZk6siLFZAYq-6cFcLdnkTvkgsBQ6Wjn_BCUj6eLA8JVJwvMoMbrfBRfKmahnlX271jHvpz7j1U0W1IuUc5_vcJRBg_pywX6cEGwoYc-Z20B3cZpWFCkodiRoPyakqF-fPv67lV7HxdSCfIoQwp6Pwzx8m6UDBy0y0JnoymAqrNTax6D1hs")',
                }}
              ></div>
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-[#1b0d0e] dark:text-white text-lg font-bold">
                  Sate Sapi Maranggi
                </h3>
                <span className="text-primary font-bold">Rp 35.000</span>
              </div>
              <p className="text-[#9a4c50] dark:text-white/60 text-sm font-normal leading-relaxed mb-4 line-clamp-2">
                Daging sapi pilihan yang dimarinasi bumbu rempah spesial, dibakar
                hingga empuk meresap.
              </p>
              <button className="w-full py-2 rounded-lg border-2 border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  add_shopping_cart
                </span>{" "}
                Tambah ke Keranjang
              </button>
            </div>
          </div>
          {/* Sate Item 3 */}
          <div className="group flex flex-col gap-4 bg-white dark:bg-white/5 p-4 rounded-xl border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <div
                className="w-full h-full bg-center bg-cover transform group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADb6eyZN4iibSBKqnpFd33iUGO95I5QFF_NgMmFx-40uHPQBnyZ_bVfNyHyUv2buKk9IdQ13kBIbU9mjLn5f9PWJPkHdoD7LWBc_oMHJ0q_76h8ScCC2A1hcNKWhM9HmOyAo92nvPmPghyBn2wjb_7KUt4qu4v82HhKzfYxNwFROAjHAgDYo8Tm-PGbs5VDmEfS0IEcSpfc2GjX_ZuSa5NGX3Vmyt9RJJTXCaRXUwg3dQ6hN53gGvjq6dbMFERd_oY1oBqQ5j-D6k")',
                }}
              ></div>
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-[#1b0d0e] dark:text-white text-lg font-bold">
                  Sate Kambing Muda
                </h3>
                <span className="text-primary font-bold">Rp 40.000</span>
              </div>
              <p className="text-[#9a4c50] dark:text-white/60 text-sm font-normal leading-relaxed mb-4 line-clamp-2">
                Daging kambing muda tanpa aroma prengus, disajikan dengan kecap
                pedas dan irisan bawang merah.
              </p>
              <button className="w-full py-2 rounded-lg border-2 border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  add_shopping_cart
                </span>{" "}
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
