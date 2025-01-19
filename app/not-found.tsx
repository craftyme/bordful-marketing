import { Metadata } from "next";
import { CustomLink } from "@/components/ui/link";

export const metadata: Metadata = {
  title: "404: Page Not Found",
  description: "Sorry, we couldn&apos;t find the page you&apos;re looking for.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center text-center">
      <h1 className="mb-2 text-4xl font-medium">404</h1>
      <h2 className="mb-4 text-lg text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </h2>
      <div className="flex gap-4">
        <CustomLink href="/" variant="button">
          Go Home
        </CustomLink>
        <CustomLink href="/help" variant="button">
          Help Center
        </CustomLink>
      </div>
    </div>
  );
}
