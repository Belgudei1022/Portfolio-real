'use client'

import Spline from "@splinetool/react-spline";
import HeroSection from "@/components/hero/page";
import AboutSection from "@/components/about/page";
import ExperienceSection from "@/components/experience/page";
import { useEffect, useRef } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scrollInstance: any;

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      if (scrollRef.current) {
        scrollInstance = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.05, // lower = smoother (default is 0.1)
          multiplier: 1, // scroll speed (default is 1)
        });
      }
    })();

    return () => {
      if (scrollInstance) {
        scrollInstance.destroy();
      }
    };
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-black">
      <Spline
        className="fixed inset-0 w-full h-full z-0"
        scene="https://prod.spline.design/xpXI5rETToUkkUoi/scene.splinecode"
      />

      <div className="fixed inset-0 bg-black opacity-40 z-10"></div>

      <div
        ref={scrollRef}
        data-scroll-container
        className="min-h-auto relative z-20 w-full flex flex-col gap-[100px]"
        
      >
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
