import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva(
  "inline-flex items-center justify-center transition-colors",
  {
    variants: {
      variant: {
        default: "text-muted-foreground hover:text-foreground",
        nav: "text-[13px] text-muted-foreground hover:text-foreground",
        button:
          "h-7 rounded-full border border-border bg-background px-3 text-[13px] text-muted-foreground hover:bg-background hover:text-foreground",
        primary:
          "h-7 rounded-full bg-foreground px-4 text-[13px] font-medium text-background hover:bg-foreground/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  external?: boolean;
}

const CustomLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, href, external, children, ...props }, ref) => {
    const isHashLink = href.startsWith("#");
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <Link
        className={cn(linkVariants({ variant, className }))}
        href={href}
        ref={ref}
        scroll={!isHashLink}
        {...externalProps}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

CustomLink.displayName = "CustomLink";

export { CustomLink, linkVariants };
