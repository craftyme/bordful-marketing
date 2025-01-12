import { SectionHeader } from "@/components/ui/section-header";

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Documentation"
        description="Welcome to the Bordful documentation. Learn how to create and customize your job board."
      />

      <div className="space-y-4">
        <h2 className="text-xl font-medium tracking-tight">Overview</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Bordful is a modern, customizable job board template built with
          Next.js. This documentation will help you get started with setting up
          your own job board, customizing its appearance, and managing job
          listings through Airtable.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-medium tracking-tight">Getting Started</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          To get started with Bordful, you&apos;ll need:
        </p>
        <ul className="ml-6 list-disc text-sm text-muted-foreground space-y-2">
          <li>Node.js 18.17 or later</li>
          <li>A package manager (npm, yarn, or pnpm)</li>
          <li>An Airtable account</li>
          <li>Basic knowledge of React and Next.js</li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mt-4">
          Check out our Quick Start guide to set up your job board in minutes.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-medium tracking-tight">
          Documentation Sections
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Quick Start</h3>
            <p className="text-sm text-muted-foreground">
              Get your job board up and running quickly with our step-by-step
              guide.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Guides</h3>
            <p className="text-sm text-muted-foreground">
              Detailed guides for customizing and extending your job board.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">API Reference</h3>
            <p className="text-sm text-muted-foreground">
              Complete API documentation for integrating with your job board.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Examples</h3>
            <p className="text-sm text-muted-foreground">
              Real-world examples and code snippets for common use cases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
