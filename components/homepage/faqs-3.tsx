"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";

type FAQItem = {
  id: string;
  icon: IconName;
  question: string;
  answer: string;
};

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "clock",
      question: "What are your business hours?",
      answer:
        "Our team at Greenspark Labs is available Monday through Friday from 9:00 AM to 8:00 PM EAT, and weekends from 10:00 AM to 6:00 PM EAT. During local holidays, hours may vary and will be updated on our website.",
    },
    {
      id: "item-2",
      icon: "credit-card",
      question: "How do billing and subscription payments work?",
      answer:
        "For subscription-based services, payments are automatically charged to your default payment method on the same day each month or year, depending on your plan. You can update billing info, view invoices, and manage subscriptions via your account dashboard.",
    },
    {
      id: "item-3",
      icon: "truck",
      question: "Do you offer project delivery timelines?",
      answer:
        "Yes, each project includes an agreed-upon timeline that outlines milestones and final delivery. Timelines may vary depending on project complexity, but we always keep you updated on progress and expected completion dates.",
    },
    {
      id: "item-4",
      icon: "globe",
      question: "Do you offer localized or multilingual support?",
      answer:
        "Greenspark Labs provides support for English and Swahili. Our team can assist via email, chat, and calls during standard business hours in each region. Additional languages can be supported on request.",
    },
    {
      id: "item-5",
      icon: "package",
      question: "How can I track project progress?",
      answer:
        "You’ll receive regular updates via email and your client dashboard. Progress reports include completed tasks, milestones achieved, and upcoming deliverables, ensuring full visibility throughout the project.",
    },
  ];

  return (
    <section className="bg-muted dark:bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-4">
                Can't find what you're looking for? Contact our{" "}
                <Link
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  customer support team
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon
                          name={item.icon}
                          className="m-auto size-4"
                        />
                      </div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
