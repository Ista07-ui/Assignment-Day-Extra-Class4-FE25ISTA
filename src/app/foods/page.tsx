export default function ListFoodPage() {
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
              Jajanan Sederhana
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
              <a className="text-sm font-medium text-[#f2c10d]" href="#">
                Foods
              </a>
            </nav>
            <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#f2c10d] text-[#221e10] text-sm font-bold transition-transform active:scale-95">
              <span className="truncate">Tambah Makanan</span>
            </button>
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
            <span className="material-symbols-outlined text-sm">inventory_2</span>
            <span>24 Total Jajanan</span>
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
            <div className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-[#494022]/40 border border-slate-200 dark:border-white/5 px-5 cursor-pointer hover:bg-slate-100 dark:hover:bg-[#494022] transition-colors">
              <p className="text-sm font-medium">Minuman</p>
            </div>
            <div className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-[#494022]/40 border border-slate-200 dark:border-white/5 px-5 cursor-pointer hover:bg-slate-100 dark:hover:bg-[#494022] transition-colors">
              <p className="text-sm font-medium">Snack</p>
            </div>
          </div>
        </div>
        {/* ImageGrid / Food List Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group flex flex-col bg-white dark:bg-[#2c2715] rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 cursor-pointer hover:border-[#f2c10d]/50 transition-all hover:shadow-xl hover:shadow-[#f2c10d]/5">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDz9HPjT77rCRiM8qq6QoOPiKYNfDFsnCPZphy3GlRV0596vdCtQREd9W24qvpLK3KFzTfQzpQj5qgqhTNzDY5jAmL8a5_0ADzOTRqefESujVwL1TBkyupQne6bOFg6SEu5W0IoNhtyuLzlRjNOV-RE1vT13rK7et3Wd3wOSRxDUF5MkOFIfWuO8NEsC7NBnol2dMAGR603dFy4YnyBQc18HjLgHwl9D4p8aKjj_3ySm9vqZJLHTe10FQEo3V0sOV8btDsFVAHklt0")',
                }}
              ></div>
              <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                Tersedia
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold group-hover:text-[#f2c10d] transition-colors">
                  Kue Putu Bamboo
                </h3>
                <span className="text-[#f2c10d] font-bold">Rp 15k</span>
              </div>
              <p className="text-slate-500 dark:text-[#cbbe90] text-sm leading-relaxed line-clamp-2">
                Kue tradisional kukus dengan isian gula jawa cair dan taburan
                kelapa parut segar.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Kategori: Makanan
                </span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-[#f2c10d]/20 hover:text-[#f2c10d] transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                  </button>
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-red-500/20 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group flex flex-col bg-white dark:bg-[#2c2715] rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 cursor-pointer hover:border-[#f2c10d]/50 transition-all hover:shadow-xl hover:shadow-[#f2c10d]/5">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAWCoh6cYaX7L6j0W3RJ3Uh0Ze-Eu7BHdiULvJmCsz81ydiAbCmyTCFCax1WfK8c0WbVYnZljk7YzoPgy83NeM3tlwT4izlimV5A7HLcyKtmz3qSC-4L68CWBw_yxjvq0kFd89sg9jtXcVobu3dGwMHvkGA0urkAHRj9K7XL3F53oBXobuk58Vr40hw2FP1LmWWhduOrprnGUliemlKnY9YIsslcE6vf7UA42GZJqQy5c-E9egbvsO_heR5AAmTgm75YWco-1Rivg")',
                }}
              ></div>
              <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                Tersedia
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold group-hover:text-[#f2c10d] transition-colors">
                  Es Cendol Durian
                </h3>
                <span className="text-[#f2c10d] font-bold">Rp 22k</span>
              </div>
              <p className="text-slate-500 dark:text-[#cbbe90] text-sm leading-relaxed line-clamp-2">
                Minuman segar dengan cendol pandan asli, santan kental, gula
                merah, dan topping durian.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Kategori: Minuman
                </span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-[#f2c10d]/20 hover:text-[#f2c10d] transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                  </button>
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-red-500/20 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group flex flex-col bg-white dark:bg-[#2c2715] rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 cursor-pointer hover:border-[#f2c10d]/50 transition-all hover:shadow-xl hover:shadow-[#f2c10d]/5">
            <div className="relative w-full aspect-[16/10] overflow-hidden opacity-80">
              <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSVHw61cjcr9whh850QW9oeQf5BRgsKRu4aYfG_v18VAIj_ZJVjfkDZZxwXiwfKPhU9yIavVPE-V9jDLX18TURwG9rCeK-HScuT4BUDpMgjU1IMrW3N2Pu6mrR3phyYtQsbpHODZ2eFZ7qPtYz_-0CcZm2nEwB4gMoULDOwxdH7A1QhUj3LWwj_iqcauEmXQj_3ifTxgPVCz0jj-MFcJ43SeUvziWuv-yrHgYyrT2pqASYocJpD8GXmjlginuMwWmV8zpSKrifAT4")',
                }}
              ></div>
              <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                Habis
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                <span className="text-white font-black text-xl tracking-widest uppercase">
                  STOK KOSONG
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold group-hover:text-[#f2c10d] transition-colors">
                  Klepon Pandan
                </h3>
                <span className="text-[#f2c10d] font-bold">Rp 12k</span>
              </div>
              <p className="text-slate-500 dark:text-[#cbbe90] text-sm leading-relaxed line-clamp-2">
                Bola ketan kenyal dengan aroma pandan asli dan letupan gula
                merah di dalamnya.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Kategori: Snack
                </span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-[#f2c10d]/20 hover:text-[#f2c10d] transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                  </button>
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-red-500/20 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="group flex flex-col bg-white dark:bg-[#2c2715] rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 cursor-pointer hover:border-[#f2c10d]/50 transition-all hover:shadow-xl hover:shadow-[#f2c10d]/5">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQSqljPf-f6qSiq4sCr10ipmuCvBKsz-ejfBL7uWAj37o5sIiyRFtgtEH4nI8JfgN0ga49xumH8OX9IBAcSg9PNW4H5lPekG2DHFzmxa8RwRCKTIMLAbSGNTrAkkD8FTfQAyYPgosbKJEbooaos4jRag-1M2ZrMMJKORk4qh78eb1q0nyHua8A2THecVeYorIVTkGrTlMotD3rLIDxfMHY5tqOwtf9JxebynblKbKxBNDmjI8eUHJ6lAJdYIJFoXFI296NUQs4YKs")',
                }}
              ></div>
              <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                Tersedia
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold group-hover:text-[#f2c10d] transition-colors">
                  Lumpia Semarang
                </h3>
                <span className="text-[#f2c10d] font-bold">Rp 18k</span>
              </div>
              <p className="text-slate-500 dark:text-[#cbbe90] text-sm leading-relaxed line-clamp-2">
                Lumpia goreng isi rebung, ayam, dan udang khas Semarang dengan
                saus kental manis gurih.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Kategori: Snack
                </span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-[#f2c10d]/20 hover:text-[#f2c10d] transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                  </button>
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-red-500/20 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="group flex flex-col bg-white dark:bg-[#2c2715] rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 cursor-pointer hover:border-[#f2c10d]/50 transition-all hover:shadow-xl hover:shadow-[#f2c10d]/5">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCl6fp9U6VGEDLTznnYcAAEq-OmEtwYnR0oSJSnruAIQSZLesEKOAtOS3gCusaluAURFvoeQq_tMOGZlsvfzLpo4_TmWq9H9AlZ6ifWjrPk8j0ynljMFfuMWWuMBxdtae6ZbyxNBex8VHn4B99hlDq7xSS0PkKnLWsaUSj3DeKo6DpbgpsjRAjVhx9teqRW89PcrJGCVVOsF2lW2LNgIMi89kbK5or_DDi2Yr57F5SHwL3IyBZrJebf5YTlRl2tBtRcB7yFQmkE1fA")',
                }}
              ></div>
              <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                Tersedia
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold group-hover:text-[#f2c10d] transition-colors">
                  Martabak Spesial
                </h3>
                <span className="text-[#f2c10d] font-bold">Rp 45k</span>
              </div>
              <p className="text-slate-500 dark:text-[#cbbe90] text-sm leading-relaxed line-clamp-2">
                Martabak manis premium dengan topping keju melimpah, kacang
                sangrai, dan cokelat meses.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Kategori: Makanan
                </span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-[#f2c10d]/20 hover:text-[#f2c10d] transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                  </button>
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-red-500/20 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="group flex flex-col bg-white dark:bg-[#2c2715] rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 cursor-pointer hover:border-[#f2c10d]/50 transition-all hover:shadow-xl hover:shadow-[#f2c10d]/5">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcMWj3Y83yOQrRecmUXIU0MezXoLirtaWR302rfGslYA61xkyPDAfylkMyJWOJ94E5wfySx22CsvQBp5KQXUc2uzJz7f2Pl3dmjw4MZyGEKHMcHXgTi3WWnPNYIcw8Lu15qBhj3JkrSUfmga3TmBqhozMwlEnrMnhXadelUkV1X5leRJ3nyyg0CYg1xAJZjj-LGs7hl5yLlno6J2TNPoMZCscRH4o0qah7FAu9_VDHWUaia4BCsl5sOR3KVKdvK4CC7xzOntEY73w")',
                }}
              ></div>
              <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                Tersedia
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold group-hover:text-[#f2c10d] transition-colors">
                  Onde-Onde Wijen
                </h3>
                <span className="text-[#f2c10d] font-bold">Rp 10k</span>
              </div>
              <p className="text-slate-500 dark:text-[#cbbe90] text-sm leading-relaxed line-clamp-2">
                Bola wijen goreng dengan tekstur luar renyah dan isian pasta
                kacang hijau yang manis lembut.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Kategori: Snack
                </span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-[#f2c10d]/20 hover:text-[#f2c10d] transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                  </button>
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-red-500/20 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Pagination */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <button className="flex size-10 items-center justify-center rounded-lg bg-white dark:bg-[#494022]/40 border border-slate-200 dark:border-white/5 hover:bg-[#f2c10d] hover:text-[#221e10] transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="flex gap-2">
            <button className="size-10 rounded-lg bg-[#f2c10d] text-[#221e10] font-bold">
              1
            </button>
            <button className="size-10 rounded-lg bg-white dark:bg-[#494022]/40 border border-slate-200 dark:border-white/5 hover:border-[#f2c10d] transition-all font-medium">
              2
            </button>
            <button className="size-10 rounded-lg bg-white dark:bg-[#494022]/40 border border-slate-200 dark:border-white/5 hover:border-[#f2c10d] transition-all font-medium">
              3
            </button>
          </div>
          <button className="flex size-10 items-center justify-center rounded-lg bg-white dark:bg-[#494022]/40 border border-slate-200 dark:border-white/5 hover:bg-[#f2c10d] hover:text-[#221e10] transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>
      <footer className="border-t border-slate-200 dark:border-white/5 py-8 mt-12 bg-white/50 dark:bg-black/20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Jajanan Sederhana Admin Dashboard. Built with love for local
            culinary.
          </p>
        </div>
      </footer>
    </div>
  );
}
