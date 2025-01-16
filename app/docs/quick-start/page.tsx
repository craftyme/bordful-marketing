import { getDocBySlug } from "@/lib/docs";
import { notFound } from "next/navigation";
import { TableOfContents } from "@/components/table-of-contents";
import { ArticleLayout } from "@/components/article-layout";
import { extractHeadings } from "@/lib/mdx";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default async function QuickStartPage() {
  const doc = getDocBySlug("quick-start");

  if (!doc) {
    notFound();
  }

  const headings = extractHeadings(doc.content);

  return (
    <div className="flex gap-10">
      <div className="flex-1">
        <div className="flex justify-start">
          <Breadcrumbs className="mb-4" />
        </div>
        <ArticleLayout
          title={doc.title}
          description={doc.description}
          content={doc.content}
          date={doc.lastUpdated}
          headerClassName="space-y-6"
        />
      </div>
      <TableOfContents headings={headings} />
    </div>
  );
}
