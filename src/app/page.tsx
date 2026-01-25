import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuNavigation from "@/components/MenuNavigation";
import SateSection from "@/components/SateSection";
import MainCourseSection from "@/components/MainCourseSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MenuNavigation />
        <SateSection />
        <MainCourseSection />
      </main>
      <Footer />
    </>
  );
}
