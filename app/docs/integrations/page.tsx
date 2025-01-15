import { getDocBySlug } from "@/lib/docs";
import { notFound } from "next/navigation";
import { TableOfContents } from "@/components/table-of-contents";
import { ArticleLayout } from "@/components/article-layout";
import { extractHeadings } from "@/lib/mdx";

export default async function IntegrationsPage() {
  const doc = getDocBySlug("integrations/index");

  if (!doc) {
    notFound();
  }

  const headings = extractHeadings(doc.content);

  return (
    <div className="flex gap-10">
      <div className="flex-1">
        <ArticleLayout
          title={doc.title}
          description={doc.description}
          content={doc.content}
          date={doc.lastUpdated}
          badge={{
            text: "Integrations",
            className: "bg-muted/50",
          }}
        />
      </div>
      <TableOfContents headings={headings} />
    </div>
  );
}
