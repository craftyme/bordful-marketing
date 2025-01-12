import * as React from "react";
import { GeistMono } from "geist/font/mono";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Helper function to generate slug from text
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const mdxComponents = {
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-4 text-sm text-muted-foreground leading-relaxed last:mb-0"
      {...props}
    />
  ),
  pre: ({ children }: { children: React.ReactNode }) => children,
  code: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    // If it's inline code
    if (!className) {
      return (
        <code
          className={`${GeistMono.className} relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-medium text-[13px] text-foreground`}
        >
          {children}
        </code>
      );
    }
    // Get the language from className (format: language-*)
    const language = className.replace("language-", "");
    return (
      <div className="mb-4">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            fontFamily: GeistMono.style.fontFamily,
            fontSize: "13px",
            lineHeight: "1.6",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
          codeTagProps={{
            className: GeistMono.className,
          }}
        >
          {String(children).trim()}
        </SyntaxHighlighter>
      </div>
    );
  },
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="inline-flex items-center text-foreground font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mt-12 mb-6 text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
      id={slugify(children as string)}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-8 mb-4 text-2xl font-medium tracking-tight text-foreground"
      id={slugify(children as string)}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-6 mb-4 text-xl font-medium tracking-tight text-foreground"
      id={slugify(children as string)}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="mt-6 mb-4 text-lg font-medium tracking-tight text-foreground"
      id={slugify(children as string)}
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className="mt-6 mb-4 text-base font-medium tracking-tight text-foreground"
      id={slugify(children as string)}
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className="mt-6 mb-4 text-sm font-medium tracking-tight text-foreground"
      id={slugify(children as string)}
      {...props}
    >
      {children}
    </h6>
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mb-4 ml-0 space-y-2 list-decimal pl-4 marker:text-muted-foreground last:mb-0"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mb-4 ml-0 space-y-2 list-disc pl-4 marker:text-muted-foreground last:mb-0"
      {...props}
    />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-sm text-muted-foreground pl-1" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
  hr: () => <hr className="my-6 border-t border-border" />,
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="mb-4 w-full overflow-hidden rounded-lg border border-border">
      <table className="w-full border-collapse text-xs bg-card" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="border-b border-border bg-muted/50" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody
      className="divide-y divide-border [&>tr:nth-child(odd)]:bg-muted/20"
      {...props}
    />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="transition-colors hover:bg-muted/40" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className="whitespace-nowrap px-3 py-2 text-left font-medium text-foreground"
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td className="px-3 py-2 text-muted-foreground" {...props} />
  ),
};
