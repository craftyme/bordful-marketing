import { createMetadata } from "@/lib/metadata";
import { CustomLink } from "@/components/ui/link";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata = createMetadata('/style-guide', {
  title: "Style Guide - Bordful",
  description: "A comprehensive guide to Bordful's design system, components, and patterns.",
});

export default function StyleGuidePage() {
  return (
    <div className="relative w-full min-w-0">
      <div className="flex justify-start">
        <Breadcrumbs className="mb-4" />
      </div>

      <div className="max-w-[800px] divide-y divide-border">
        {/* Typography */}
        <div id="typography" className="space-y-8 pb-16">
          <div className="space-y-4">
            <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Typography
            </h1>
            <p className="text-sm text-muted-foreground text-balance">
              Text styles, fonts, and headings used across the site.
            </p>
          </div>

          {/* Font Family */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Font Family</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="font-sans text-sm text-muted-foreground">
                  font-sans (Geist)
                </p>
                <p className="text-lg">
                  The quick brown fox jumps over the lazy dog
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Variable font with weights 400-600. Used as our main font
                  across the site.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-sm text-muted-foreground">
                  font-mono (Geist Mono)
                </p>
                <p className="font-mono text-lg">
                  The quick brown fox jumps over the lazy dog
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Used for code snippets and monospace text.
                </p>
              </div>
            </div>
          </div>

          {/* Font Weights */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Font Weights</h2>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    font-normal (400)
                  </p>
                  <p className="text-lg font-normal">
                    Normal weight text - Used for body text
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    font-medium (500)
                  </p>
                  <p className="text-lg font-medium">
                    Medium weight text - Used for headings and buttons
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Headings */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Headings</h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Hero (text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium
                  tracking-tight)
                </p>
                <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Hero Heading
                </h1>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Section (text-2xl sm:text-3xl font-medium tracking-tight)
                </p>
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  Section Heading
                </h2>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Subsection (text-xl font-medium tracking-tight)
                </p>
                <h3 className="text-xl font-medium tracking-tight">
                  Subsection Heading
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Card (text-sm font-medium tracking-tight)
                </p>
                <h3 className="text-sm font-medium tracking-tight">
                  Card Heading
                </h3>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Body Text</h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Base (text-base - 16px)
                </p>
                <p className="text-base">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Regular (text-sm - 14px)
                </p>
                <p className="text-sm">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Muted (text-sm text-muted-foreground)
                </p>
                <p className="text-sm text-muted-foreground">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Small (text-xs - 12px)
                </p>
                <p className="text-xs text-muted-foreground">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Balanced (text-balance max-w-[600px])
                </p>
                <p className="text-sm text-muted-foreground text-balance max-w-[600px]">
                  This is an example of balanced text with a maximum width.
                  It&apos;s used for better readability in section descriptions
                  and card content. The text-balance property ensures even line
                  lengths.
                </p>
              </div>
            </div>
          </div>

          {/* Line Heights */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Line Heights</h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Tight (leading-tight)
                </p>
                <p className="text-lg leading-tight">
                  The quick brown fox jumps over the lazy dog. This text
                  demonstrates tight line height spacing commonly used in
                  headings.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Normal (leading-normal)
                </p>
                <p className="text-lg leading-normal">
                  The quick brown fox jumps over the lazy dog. This text
                  demonstrates normal line height spacing used in most body
                  text.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Relaxed (leading-relaxed)
                </p>
                <p className="text-lg leading-relaxed">
                  The quick brown fox jumps over the lazy dog. This text
                  demonstrates relaxed line height spacing used in some body
                  text for better readability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div id="colors" className="space-y-8 py-16">
          <div className="space-y-4">
            <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Colors
            </h1>
            <p className="text-sm text-muted-foreground text-balance">
              Color system and theme variables used across the site.
            </p>
          </div>

          {/* Theme Colors */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Theme Colors</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-background border"></div>
                <p className="text-sm font-medium">Background</p>
                <p className="text-xs text-muted-foreground">bg-background</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-foreground border"></div>
                <p className="text-sm font-medium">Foreground</p>
                <p className="text-xs text-muted-foreground">bg-foreground</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-muted border"></div>
                <p className="text-sm font-medium">Muted</p>
                <p className="text-xs text-muted-foreground">bg-muted</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-primary border"></div>
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs text-muted-foreground">bg-primary</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-secondary border"></div>
                <p className="text-sm font-medium">Secondary</p>
                <p className="text-xs text-muted-foreground">bg-secondary</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-accent border"></div>
                <p className="text-sm font-medium">Accent</p>
                <p className="text-xs text-muted-foreground">bg-accent</p>
              </div>
            </div>
          </div>

          {/* Opacity Variations */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Opacity Variations</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-primary/10 border"></div>
                <p className="text-sm font-medium">10% Opacity</p>
                <p className="text-xs text-muted-foreground">bg-primary/10</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-primary/50 border"></div>
                <p className="text-sm font-medium">50% Opacity</p>
                <p className="text-xs text-muted-foreground">bg-primary/50</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg bg-primary/80 border"></div>
                <p className="text-sm font-medium">80% Opacity</p>
                <p className="text-xs text-muted-foreground">bg-primary/80</p>
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Text Colors</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Default Text</p>
                <p className="text-lg">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Muted Text (text-muted-foreground)
                </p>
                <p className="text-lg text-muted-foreground">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Primary Text (text-primary)
                </p>
                <p className="text-lg text-primary">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Secondary Text (text-secondary)
                </p>
                <p className="text-lg text-secondary">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Components */}
        <div id="components" className="space-y-8 py-16">
          <div className="space-y-4">
            <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Components
            </h1>
            <p className="text-sm text-muted-foreground text-balance">
              Common UI components and patterns used across the site.
            </p>
          </div>

          {/* Badges */}
          <div id="badges" className="space-y-4">
            <h2 className="text-xl font-medium">Badges</h2>
            <div className="flex flex-wrap gap-4">
              <Badge className="text-muted-foreground">Default Badge</Badge>
              <Badge className="border-primary/20 bg-primary/10 text-primary">
                Primary Badge
              </Badge>
              <Badge className="bg-muted/50">Muted Badge</Badge>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div id="breadcrumbs" className="space-y-4">
            <h2 className="text-xl font-medium">Breadcrumbs</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Default Breadcrumbs
                </p>
                <Breadcrumbs
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Style Guide", href: "/style-guide" },
                    { label: "Components", href: "/style-guide#components" },
                  ]}
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Auto-generated from Path
                </p>
                <Breadcrumbs />
              </div>
            </div>
          </div>

          {/* Buttons & Links */}
          <div id="buttons-links" className="space-y-4">
            <h2 className="text-xl font-medium">Buttons & Links</h2>
            <div className="flex flex-wrap gap-4">
              <CustomLink
                href="#"
                variant="primary"
                className="h-10 px-6 text-sm"
              >
                Primary Link
              </CustomLink>
              <CustomLink
                href="#"
                variant="button"
                className="h-10 px-6 text-sm"
              >
                Secondary Link
              </CustomLink>
              <CustomLink href="#" className="text-sm">
                Text Link
              </CustomLink>
            </div>
          </div>

          {/* Cards */}
          <div id="cards" className="space-y-4">
            <h2 className="text-xl font-medium">Cards</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Blog Card */}
              <div className="block rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80">
                <time className="text-xs text-muted-foreground">
                  January 10, 2024
                </time>
                <div className="mt-2">
                  <h3 className="mb-1.5 text-sm font-medium tracking-tight">
                    Blog Card Title
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Blog card description text goes here, showing how we style
                    blog post previews.
                  </p>
                </div>
              </div>

              {/* Doc Card */}
              <div className="block rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-medium">Doc Card Title</h3>
                  <Badge className="border-primary/20 bg-primary/10 text-primary">
                    New
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Documentation card description text goes here, showing how we
                  style doc previews.
                </p>
              </div>
            </div>
          </div>

          {/* Section Headers */}
          <div id="section-headers" className="space-y-4">
            <h2 className="text-xl font-medium">Section Headers</h2>
            <div className="space-y-8">
              {/* Centered Section Header */}
              <div className="text-center">
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  Centered Section Title
                </h2>
                <p className="mx-auto mt-4 max-w-[600px] text-center text-sm text-muted-foreground text-balance">
                  This is how we style centered section headers with
                  descriptions, commonly used on the homepage.
                </p>
              </div>

              {/* Left-aligned Section Header */}
              <div>
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  Left-aligned Section Title
                </h2>
                <p className="mt-4 max-w-[600px] text-sm text-muted-foreground text-balance">
                  This is how we style left-aligned section headers with
                  descriptions, commonly used in documentation.
                </p>
              </div>
            </div>
          </div>

          {/* Spacing Examples */}
          <div id="spacing" className="space-y-4">
            <h2 className="text-xl font-medium">Spacing</h2>
            <div className="space-y-4">
              <div>
                <div className="h-4 w-full bg-primary/10"></div>
                <p className="mt-2 text-sm text-muted-foreground">
                  mt-2 (0.5rem) - Minimal spacing
                </p>
              </div>
              <div>
                <div className="h-4 w-full bg-primary/10"></div>
                <p className="mt-4 text-sm text-muted-foreground">
                  mt-4 (1rem) - Standard spacing
                </p>
              </div>
              <div>
                <div className="h-8 w-full bg-primary/10"></div>
                <p className="mt-8 text-sm text-muted-foreground">
                  mt-8 (2rem) - Section spacing
                </p>
              </div>
              <div>
                <div className="h-12 w-full bg-primary/10"></div>
                <p className="mt-12 text-sm text-muted-foreground">
                  mt-12 (3rem) - Large section spacing
                </p>
              </div>
            </div>
          </div>

          {/* Tables & Lists */}
          <div id="tables-lists" className="space-y-4">
            <h2 className="text-xl font-medium">Tables & Lists</h2>
            <div className="space-y-8">
              {/* Table Example */}
              <div className="mb-4 w-full overflow-hidden rounded-lg border border-border">
                <table className="w-full border-collapse text-xs bg-card">
                  <thead className="border-b border-border bg-muted/50">
                    <tr>
                      <th className="whitespace-nowrap px-3 py-2 text-left font-medium text-foreground">
                        Name
                      </th>
                      <th className="whitespace-nowrap px-3 py-2 text-left font-medium text-foreground">
                        Role
                      </th>
                      <th className="whitespace-nowrap px-3 py-2 text-left font-medium text-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border [&>tr:nth-child(odd)]:bg-muted/20">
                    <tr className="transition-colors hover:bg-muted/40">
                      <td className="px-3 py-2 text-muted-foreground">
                        John Doe
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">
                        Developer
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">
                        Active
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/40">
                      <td className="px-3 py-2 text-muted-foreground">
                        Jane Smith
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">
                        Designer
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">Away</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* List Example */}
              <div className="space-y-4">
                <div className="divide-y divide-border">
                  <div className="flex items-center gap-2 py-3">
                    <span className="text-primary">•</span>
                    <span className="text-sm text-muted-foreground">
                      List item with divider
                    </span>
                  </div>
                  <div className="flex items-center gap-2 py-3">
                    <span className="text-primary">•</span>
                    <span className="text-sm text-muted-foreground">
                      Another list item
                    </span>
                  </div>
                  <div className="flex items-center gap-2 py-3">
                    <span className="text-primary">•</span>
                    <span className="text-sm text-muted-foreground">
                      Final list item
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Container */}
          <div id="container" className="space-y-4">
            <h2 className="text-xl font-medium">Container</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Default Container
                </p>
                <div className="container border border-dashed border-border px-4 py-8 text-center text-sm text-muted-foreground md:px-6">
                  container px-4 md:px-6
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Max Width Variations
                </p>
                <div className="space-y-4">
                  <div className="mx-auto max-w-[600px] border border-dashed border-border px-4 py-4 text-center text-sm text-muted-foreground">
                    max-w-[600px]
                  </div>
                  <div className="mx-auto max-w-[800px] border border-dashed border-border px-4 py-4 text-center text-sm text-muted-foreground">
                    max-w-[800px]
                  </div>
                  <div className="mx-auto max-w-[1200px] border border-dashed border-border px-4 py-4 text-center text-sm text-muted-foreground">
                    max-w-[1200px]
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid System */}
          <div id="grid-system" className="space-y-4">
            <h2 className="text-xl font-medium">Grid System</h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  2 Columns (sm:grid-cols-2)
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Column 1
                  </div>
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Column 2
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  3 Columns (lg:grid-cols-3)
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Column 1
                  </div>
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Column 2
                  </div>
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Column 3
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Sidebar Layout (md:grid-cols-[220px_1fr])
                </p>
                <div className="grid gap-4 md:grid-cols-[220px_1fr]">
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Sidebar
                  </div>
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Main Content
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transitions */}
          <div id="transitions" className="space-y-4">
            <h2 className="text-xl font-medium">Transitions</h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Colors (transition-colors)
                </p>
                <div className="flex gap-4">
                  <div className="rounded-lg border bg-background/50 p-4 text-sm transition-colors hover:bg-background/80">
                    Hover me
                  </div>
                  <div className="rounded-lg border bg-primary/10 p-4 text-sm transition-colors hover:bg-primary/20">
                    Hover me
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Transform (transition-transform)
                </p>
                <div className="flex gap-4">
                  <div className="rounded-lg border bg-background/50 p-4 text-sm transition-transform hover:translate-y-[-2px]">
                    Hover me
                  </div>
                  <div className="rounded-lg border bg-background/50 p-4 text-sm transition-transform hover:scale-105">
                    Hover me
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loading States */}
          <div id="loading-states" className="space-y-4">
            <h2 className="text-xl font-medium">Loading States</h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Skeleton Loading
                </p>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 animate-pulse rounded-lg bg-muted"></div>
                  <div className="h-4 w-1/2 animate-pulse rounded-lg bg-muted"></div>
                  <div className="h-4 w-5/6 animate-pulse rounded-lg bg-muted"></div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Opacity Loading</p>
                <div className="space-y-4">
                  <div className="rounded-lg border bg-background/50 p-4 text-sm opacity-50">
                    Loading state with opacity
                  </div>
                  <div className="rounded-lg border bg-background/50 p-4 text-sm opacity-25">
                    Loading state with more opacity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layout */}
        <div id="layout" className="space-y-8 py-16">
          <div className="space-y-4">
            <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Layout
            </h1>
            <p className="text-sm text-muted-foreground text-balance">
              Layout patterns, containers, and grid systems used across the
              site.
            </p>
          </div>

          {/* Container */}
          <div id="container" className="space-y-4">
            <h2 className="text-xl font-medium">Container</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Default Container
                </p>
                <div className="container border border-dashed border-border px-4 py-8 text-center text-sm text-muted-foreground md:px-6">
                  container px-4 md:px-6
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Max Width Variations
                </p>
                <div className="space-y-4">
                  <div className="mx-auto max-w-[600px] border border-dashed border-border px-4 py-4 text-center text-sm text-muted-foreground">
                    max-w-[600px]
                  </div>
                  <div className="mx-auto max-w-[800px] border border-dashed border-border px-4 py-4 text-center text-sm text-muted-foreground">
                    max-w-[800px]
                  </div>
                  <div className="mx-auto max-w-[1200px] border border-dashed border-border px-4 py-4 text-center text-sm text-muted-foreground">
                    max-w-[1200px]
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid System */}
          <div id="grid-system" className="space-y-4">
            <h2 className="text-xl font-medium">Grid System</h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  2 Columns (sm:grid-cols-2)
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Column 1
                  </div>
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Column 2
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  3 Columns (lg:grid-cols-3)
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Column 1
                  </div>
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Column 2
                  </div>
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Column 3
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Sidebar Layout (md:grid-cols-[220px_1fr])
                </p>
                <div className="grid gap-4 md:grid-cols-[220px_1fr]">
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Sidebar
                  </div>
                  <div className="rounded-lg border bg-muted/20 p-4 text-center text-sm">
                    Main Content
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacing */}
          <div id="spacing" className="space-y-4">
            <h2 className="text-xl font-medium">Spacing</h2>
            <div className="space-y-4">
              <div>
                <div className="h-4 w-full bg-primary/10"></div>
                <p className="mt-2 text-sm text-muted-foreground">
                  mt-2 (0.5rem) - Minimal spacing
                </p>
              </div>
              <div>
                <div className="h-4 w-full bg-primary/10"></div>
                <p className="mt-4 text-sm text-muted-foreground">
                  mt-4 (1rem) - Standard spacing
                </p>
              </div>
              <div>
                <div className="h-8 w-full bg-primary/10"></div>
                <p className="mt-8 text-sm text-muted-foreground">
                  mt-8 (2rem) - Section spacing
                </p>
              </div>
              <div>
                <div className="h-12 w-full bg-primary/10"></div>
                <p className="mt-12 text-sm text-muted-foreground">
                  mt-12 (3rem) - Large section spacing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animation */}
        <div id="animation" className="space-y-8 py-16">
          <div className="space-y-4">
            <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Animation
            </h1>
            <p className="text-sm text-muted-foreground text-balance">
              Transitions, animations, and loading states used across the site.
            </p>
          </div>

          {/* Transitions */}
          <div id="transitions" className="space-y-4">
            <h2 className="text-xl font-medium">Transitions</h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Colors (transition-colors)
                </p>
                <div className="flex gap-4">
                  <div className="rounded-lg border bg-background/50 p-4 text-sm transition-colors hover:bg-background/80">
                    Hover me
                  </div>
                  <div className="rounded-lg border bg-primary/10 p-4 text-sm transition-colors hover:bg-primary/20">
                    Hover me
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Transform (transition-transform)
                </p>
                <div className="flex gap-4">
                  <div className="rounded-lg border bg-background/50 p-4 text-sm transition-transform hover:translate-y-[-2px]">
                    Hover me
                  </div>
                  <div className="rounded-lg border bg-background/50 p-4 text-sm transition-transform hover:scale-105">
                    Hover me
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loading States */}
          <div id="loading-states" className="space-y-4">
            <h2 className="text-xl font-medium">Loading States</h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Skeleton Loading
                </p>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 animate-pulse rounded-lg bg-muted"></div>
                  <div className="h-4 w-1/2 animate-pulse rounded-lg bg-muted"></div>
                  <div className="h-4 w-5/6 animate-pulse rounded-lg bg-muted"></div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Opacity Loading</p>
                <div className="space-y-4">
                  <div className="rounded-lg border bg-background/50 p-4 text-sm opacity-50">
                    Loading state with opacity
                  </div>
                  <div className="rounded-lg border bg-background/50 p-4 text-sm opacity-25">
                    Loading state with more opacity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
