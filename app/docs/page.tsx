import { Metadata } from "next";
import { ArticleLayout } from "@/components/article-layout";
import { Documentation } from "@/components/documentation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata('/docs', {
  title: "Documentation - Bordful",
  description:
    "Learn how to set up, customize, and manage your job board with our comprehensive documentation.",
});

export default function DocsPage() {
  return (
    <div className="relative w-full min-w-0">
      <div className="flex justify-start">
        <Breadcrumbs className="mb-4" />
      </div>
      <ArticleLayout
        title="Documentation"
        description="Everything you need to know about setting up and managing your job board. From installation to customization, we've got you covered."
        content=""
      >
        <Documentation />
      </ArticleLayout>
    </div>
  );
}
