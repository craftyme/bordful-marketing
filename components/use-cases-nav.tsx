"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CustomLink } from "./ui/link";
import { cn } from "@/lib/utils";

const USE_CASES = [
  {
    label: "City",
    href: "/use-cases/city/new-york",
  },
  {
    label: "Country",
    href: "/use-cases/country",
  },
  {
    label: "Industry",
    href: "/use-cases/industry",
  },
  {
    label: "Role",
    href: "/use-cases/role",
  },
  {
    label: "Technology",
    href: "/use-cases/technology",
  },
  {
    label: "Remote",
    href: "/use-cases/remote",
  },
];

export function UseCasesNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "inline-flex items-center gap-1 text-[13px] md:text-[14px] text-muted-foreground hover:text-foreground focus:outline-none transition-colors cursor-pointer",
            open && "text-foreground"
          )}
          onMouseEnter={() => setOpen(true)}
        >
          Use Cases
          <ChevronDown className="h-3 w-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="min-w-[140px]"
        onMouseLeave={() => setOpen(false)}
      >
        {USE_CASES.map((item) => (
          <DropdownMenuItem key={item.href} asChild className="justify-start cursor-pointer">
            <CustomLink href={item.href} className="w-full text-[13px] md:text-[14px] text-muted-foreground hover:text-foreground">
              {item.label}
            </CustomLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
