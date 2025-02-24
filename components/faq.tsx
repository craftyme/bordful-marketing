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
        "A complete job board solution powered by Next.js (frontend) and Airtable (backend). Modern, responsive website with job listings, individual job pages, filters, and search functionality.",
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
        "Yes! Built with Tailwind CSS and Next.js, you can customize colors, typography, and layout through configuration files. If you're comfortable with code, you can fully customize the functionality and design.",
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
        "Yes, completely open source and free for personal and commercial use. You only pay for hosting (e.g., Vercel, Netlify, Cloudflare) and Airtable if you exceed their free tier limits.",
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
      answer: (
        <>
          <a
            href="https://opensource.org/license/mit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            MIT license
          </a>{" "}
          - free for both personal and commercial projects. You can modify and
          distribute the code as needed.
        </>
      ),
    },
    {
      question: "Do I need to credit Bordful?",
      answer: (
        <>
          While not required by the MIT license, we appreciate attribution. If
          you use Bordful for your job board, reach out and we&apos;ll feature
          you on the{" "}
          <a href="/showcase" className="text-primary hover:underline">
            showcase
          </a>{" "}
          page.
        </>
      ),
    },
  ],
} as const;

interface QuestionItemProps {
  question: string;
  answer: string | React.ReactNode;
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
    <div>
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

interface FAQProps {
  variant?: "standalone" | "section";
  items?: Array<{
    question: string;
    answer: string;
  }>;
  showTitle?: boolean;
  title?: string;
  description?: string;
  background?: "default" | "secondary";
  className?: string;
}

const FAQContent = React.memo(function FAQContent({
  items,
}: {
  items?: Array<{
    question: string;
    answer: string;
  }>;
}) {
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

  if (items) {
    return (
      <div className="mt-8 w-full max-w-2xl mx-auto">
        <div className="divide-y divide-border/40">
          {items.map((item) => (
            <QuestionItem
              key={item.question}
              {...item}
              isOpen={openQuestions.has(item.question)}
              onToggle={() => toggleQuestion(item.question)}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
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
      <div className="mt-8 w-full max-w-2xl">
        <div className="divide-y divide-border/40">
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
    </div>
  );
});

export function FAQ({
  variant = "section",
  items,
  showTitle = true,
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about using Bordful for your job board.",
  background = "secondary",
  className,
}: FAQProps) {
  const content = (
    <>
      {showTitle && <SectionHeader title={title} description={description} />}
      <FAQContent items={items} />
    </>
  );

  if (variant === "standalone") {
    return <div className={cn("w-full", className)}>{content}</div>;
  }

  return (
    <Section variant={background}>
      <Container className={className}>{content}</Container>
    </Section>
  );
}
