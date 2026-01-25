export default function MainCourseSection() {
  return (
    <section className="px-4 md:px-20 lg:px-40 py-8 bg-background-light dark:bg-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between px-4 pb-6">
          <h2 className="text-[#1b0d0e] dark:text-white text-2xl font-black tracking-tight">
            Hidangan Berat
          </h2>
          <span className="text-primary font-bold text-sm cursor-pointer hover:underline">
            Lihat Semua
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {/* Main Item 1 */}
          <div className="flex bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm border border-black/5 hover:shadow-lg transition-shadow">
            <div
              className="w-1/3 min-w-[140px] bg-center bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQb03hR_kj1cpw-j4jVov3tvkt_5GaWW1cj82rkqMH1zwTU4Bq8Vva_PRBEeWckF0-Q0UPZppr7E6jxMCygibsCvO1n9kUOpyVnLTdykmjTcpxMrGdkBm6so1QFNjfWpx4gN1SYcwD7SPt27kmppiLq1cRnABvo8DT0acLy_9CDYLkFb8bQWx_uapT_Ue4f0Lec0JD7Mmge41UbdpgWNStOFvxFZNqf6WUx4MCcAqMzvvKE0z5KR-PQ2Ch_VNABCwntyaJOsfGFFw")',
              }}
            ></div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-[#1b0d0e] dark:text-white text-lg font-bold">
                    Nasi Uduk Kuning
                  </h3>
                  <span className="bg-forest/10 text-forest text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">
                      check_circle
                    </span>{" "}
                    HALAL
                  </span>
                </div>
                <p className="text-[#9a4c50] dark:text-white/60 text-sm mt-2">
                  Nasi kuning wangi santan, telur iris, orek tempe, dan sambal.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-primary font-bold text-lg">Rp 18.000</span>
                <button className="size-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>
          {/* Main Item 2 */}
          <div className="flex bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm border border-black/5 hover:shadow-lg transition-shadow">
            <div
              className="w-1/3 min-w-[140px] bg-center bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZCa-3Rp6DTt45rS6pCLXz_STHhmHUd8isDw-McixZz4EyB4Mem5phcy5VLic8uAOCsPIegOYIiYvRceVysYjyX1d36keToJZDtm7mylsjVoU_ppL6StkDqHiGGweBy2EKF4ogIBuOE_4SYP_e0QL5WLUDYCjsGUVYT7z4ytUmq86wB5d2g85QPI0KHf_JXboklow-x-I5HzxA6MbBcNfoPVjd05wUul83Svl6jHTBaMx9iBN61jDxz8VRQbAkp1TfL8SLOnfm7pA")',
              }}
            ></div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-[#1b0d0e] dark:text-white text-lg font-bold">
                    Bubur Ayam Spesial
                  </h3>
                </div>
                <p className="text-[#9a4c50] dark:text-white/60 text-sm mt-2">
                  Bubur lembut dengan topping ayam suwir melimpah, cakwe, dan
                  kerupuk.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-primary font-bold text-lg">Rp 15.000</span>
                <button className="size-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
