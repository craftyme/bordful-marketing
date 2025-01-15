import { getDocBySlug } from "@/lib/docs";
import { notFound } from "next/navigation";
import { TableOfContents } from "@/components/table-of-contents";
import { ArticleLayout } from "@/components/article-layout";
import { extractHeadings } from "@/lib/mdx";

export default async function IntegrationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const doc = getDocBySlug(`integrations/${resolvedParams.slug}`);

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
            text: "Integration",
            className: "bg-muted/50",
          }}
        />
      </div>
      <TableOfContents headings={headings} />
    </div>
  );
}
