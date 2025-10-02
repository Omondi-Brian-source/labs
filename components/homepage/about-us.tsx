import { Cpu, Zap } from "lucide-react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-6xl text-4xl font-medium lg:text-5xl">
          Building Modern Websites & Apps
        </h2>
        <div className="relative">
          <div className="relative z-10 space-y-4 md:w-1/2">
            <p>
              Greenspark Labs is a Kenyan digital agency delivering more than
              code. We build a full technology ecosystem—from frontend websites
              to backend apps and APIs—that reflects your brand’s style, drives
              customer engagement, and performs across all devices and
              platforms.
            </p>
            <p>
              Whether you're a small business, startup, or enterprise in Kenya
              or beyond, we’re here to translate your ideas into high-quality
              websites and applications.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">Faaast</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  It supports an entire helping developers and innovate.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">Powerful</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  It supports an entire helping developers and businesses.
                </p>
              </div>
            </div>
          </div>
          <div className="md:mask-l-from-35% md:mask-l-to-55% mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
            <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
              <Image
                src="/about-us/charts.webp"
                className="hidden rounded-[12px] dark:block"
                alt="payments illustration dark"
                width={1207}
                height={929}
              />
              <Image
                src="/about-us/charts-light.webp"
                className="rounded-[12px] shadow dark:hidden"
                alt="payments illustration light"
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
