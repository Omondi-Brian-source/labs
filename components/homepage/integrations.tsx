import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import {
  Gemini,
  Replit,
  MagicUI,
  VSCodium,
  MediaWiki,
  GooglePaLM,
} from "@/components/logos";

export default function IntegrationsSection() {
  return (
    <section>
      <div className="py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Integrate with your favorite tools
            </h2>
            <p className="text-muted-foreground mt-6">
              We connect your application or website seamlessly with popular
              platforms and services to enhance your workflow.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <IntegrationCard
              title="Google Gemini"
              description="Integrate Google Gemini AI models to power content generation, summarization, and intelligent workflows directly within your application."
            >
              <Gemini />
            </IntegrationCard>

            <IntegrationCard
              title="Replit"
              description="Connect with Replit to embed live code editing, run dev environments in the browser, and automate deployments or development tasks."
            >
              <Replit />
            </IntegrationCard>

            <IntegrationCard
              title="Magic UI"
              description="Integrate Magic UI to streamline UI component generation and deliver consistent design elements across your app with minimal overhead."
            >
              <MagicUI />
            </IntegrationCard>

            <IntegrationCard
              title="VSCodium"
              description="Support VSCodium integration for seamless code editing, offline-first development workflows, and open-source friendly development tools built into your infrastructure."
            >
              <VSCodium />
            </IntegrationCard>

            <IntegrationCard
              title="MediaWiki"
              description="Connect MediaWiki to create or manage knowledge bases, documentation platforms, or community-driven content hubs that are easy to edit and organize."
            >
              <MediaWiki />
            </IntegrationCard>

            <IntegrationCard
              title="Google PaLM"
              description="Use Google PaLM for advanced language understanding and generation — build smarter conversational agents, content assistants, or NLP-powered features."
            >
              <GooglePaLM />
            </IntegrationCard>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  title,
  description,
  children,
  link = "https://github.com/meschacirung/cnblocks",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  link?: string;
}) => {
  return (
    <Card className="p-6">
      <div className="relative">
        <div className="*:size-10">{children}</div>

        <div className="space-y-2 py-6">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </div>

        <div className="flex gap-3 border-t border-dashed pt-6">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="gap-1 pr-2 shadow-none"
          >
            <Link href={link}>
              Learn More
              <ChevronRight className="ml-0 !size-3.5 opacity-50" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
