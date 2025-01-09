import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { siteConfig } from "@/lib/constants";

const features = [
  {
    title: "Modern Stack",
    description:
      "Built with Next.js 14, TypeScript, and Tailwind CSS for a modern development experience.",
  },
  {
    title: "Responsive Design",
    description:
      "Beautiful, responsive design that works perfectly on all devices and screen sizes.",
  },
  {
    title: "Job Listings",
    description:
      "Easy-to-use job posting system with customizable categories and search functionality.",
  },
  {
    title: "User Management",
    description:
      "Built-in authentication and user management for both employers and job seekers.",
  },
  {
    title: "SEO Optimized",
    description:
      "Search engine optimized structure to help your job listings rank better.",
  },
  {
    title: "Easy Customization",
    description:
      "Highly customizable design and functionality to match your brand and needs.",
  },
] as const;

export function Features() {
  return (
    <Section variant="secondary">
      <Container>
        <h2 className="text-center text-2xl font-medium tracking-tight sm:text-3xl">
          Everything You Need
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-center text-sm text-muted-foreground">
          Built with modern technologies and best practices, {siteConfig.name}{" "}
          gives you all the features you need to run a successful job board.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80"
            >
              <h3 className="mb-1.5 text-sm font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
