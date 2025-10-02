import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Project One",
    visitUrl: "https://project1.com",
    srcDark: "/compare/first-image.png",
    srcLight: "/mail-back-light.png",
    alt: "Project One Image",
    features: [
      {
        icon: Zap,
        title: "Faaast",
        description: "It supports an entire helping developers and innovate.",
      },
      {
        icon: Cpu,
        title: "Powerful",
        description: "It supports an entire helping developers and businesses.",
      },
      {
        icon: Lock,
        title: "Security",
        description: "It supports helping developers businesses innovate.",
      },
      {
        icon: Sparkles,
        title: "AI Powered",
        description: "It supports helping developers businesses innovate.",
      },
    ],
  },
  {
    title: "Project Two",
    visitUrl: "https://project2.com",
    srcDark: "/about-us/julai.png",
    srcLight: "/mail-back-light-2.png",
    alt: "Project Two Image",
    features: [
      {
        icon: Zap,
        title: "Faaast",
        description: "Optimized for speed and efficiency.",
      },
      {
        icon: Cpu,
        title: "Powerful",
        description: "Handles large workloads with ease.",
      },
      {
        icon: Lock,
        title: "Security",
        description: "End-to-end encryption for sensitive data.",
      },
      {
        icon: Sparkles,
        title: "AI Powered",
        description: "Smart automation and recommendations.",
      },
    ],
  },
];

export default function ShowcaseSection() {
  return (
    <section className="py-16 md:py-32 space-y-20">
      {projects.map((project, index) => (
        <div key={index} className="p-4 lg:p-0 mx-auto max-w-6xl space-y-8">
          {/* Header: Title + Visit button */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">{project.title}</h2>
            <Button asChild>
              <Link
                href={project.visitUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </Link>
            </Button>
          </div>

          {/* Project Image */}
          <div className="aspect-88/36 mask-b-from-75% mask-b-to-95% relative">
            <Image
              src={project.srcDark}
              className="absolute inset-0 z-10 "
              alt={project.alt}
              width={2797}
              height={1137}
            />
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {project.features.map((feature, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2">
                  <feature.icon className="size-4" />
                  <h3 className="text-sm font-medium">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
