"use client";

import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { SectionHeader } from "./ui/section-header";
import { cn } from "@/lib/utils";

const CATEGORIES = ["General", "Technical", "Payment", "License"] as const;

const FAQ_ITEMS = {
  GENERAL: [
    {
      question: "What do I get with Bordful?",
      answer:
        "A complete job board solution powered by Airtable. Modern, responsive website with job listings, search functionality, and easy job submissions - all without coding.",
    },
    {
      question: "How often is Bordful updated?",
      answer:
        "We regularly release updates with new features and improvements. All updates are automatically available through our GitHub repository.",
    },
    {
      question: "Do I need to be an expert to use Bordful?",
      answer:
        "Not at all! If you can use Airtable, you can manage your job board. We provide detailed documentation to help you get started.",
    },
  ],
  TECHNICAL: [
    {
      question: "Can I customize the design?",
      answer:
        "Yes! Built with Tailwind CSS and Next.js, you can easily customize colors, typography, and layout through configuration files.",
    },
    {
      question: "How do I deploy my job board?",
      answer:
        "Deployment is straightforward with Vercel. Connect your GitHub repository and Vercel will automatically build and deploy your site.",
    },
  ],
  PAYMENT: [
    {
      question: "Is Bordful really free?",
      answer:
        "Yes, completely open source and free. You only pay for hosting (e.g., Vercel) and Airtable if you exceed their free tier limits.",
    },
    {
      question: "Can I charge for job postings?",
      answer:
        "Absolutely! While there's no built-in payment processing, you can easily integrate Stripe or handle payments manually.",
    },
  ],
  LICENSE: [
    {
      question: "What license does Bordful use?",
      answer:
        "MIT license - free for both personal and commercial projects. You can modify and distribute the code as needed.",
    },
    {
      question: "Do I need to credit Bordful?",
      answer:
        "While not required by the MIT license, we appreciate attribution. You can keep or remove the 'Powered by Bordful' footer link.",
    },
  ],
} as const;

interface QuestionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const QuestionItem = React.memo(function QuestionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: QuestionItemProps) {
  return (
    <div className="border-b border-border/40">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium">{question}</span>
        <svg
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform",
            isOpen && "rotate-180"
          )}
          viewBox="0 0 24 24"
        >
          <path
            d="M7 10L12 15L17 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={cn(
          "grid transition-all",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-sm text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
});

export function FAQ() {
  const [activeCategory, setActiveCategory] =
    React.useState<(typeof CATEGORIES)[number]>("General");
  const [openQuestions, setOpenQuestions] = React.useState<Set<string>>(
    new Set()
  );

  const toggleQuestion = React.useCallback((question: string) => {
    setOpenQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(question)) {
        next.delete(question);
      } else {
        next.add(question);
      }
      return next;
    });
  }, []);

  return (
    <Section id="faq">
      <Container>
        <div className="flex flex-col items-center">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Everything you need to know about Bordful. Can't find the answer you're looking for? Reach out to our support team."
          />
          <div className="mt-8 flex gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-8 w-full max-w-2xl divide-y divide-border/40">
            {FAQ_ITEMS[
              activeCategory.toUpperCase() as keyof typeof FAQ_ITEMS
            ].map((item) => (
              <QuestionItem
                key={item.question}
                {...item}
                isOpen={openQuestions.has(item.question)}
                onToggle={() => toggleQuestion(item.question)}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
