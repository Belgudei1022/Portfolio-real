import Spline from "@splinetool/react-spline";
import HeroSection from "@/components/hero/page";
import AboutSection from "@/components/about/page";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-black">
      <Spline
        className="fixed inset-0 w-full h-full z-0"
        scene="https://prod.spline.design/xpXI5rETToUkkUoi/scene.splinecode"
      />

      <div className="fixed inset-0 bg-black opacity-40 z-10"></div>

      <div className="relative z-20 w-full">
          <HeroSection />
          <AboutSection/>
      </div>
    </main>
  );
}
