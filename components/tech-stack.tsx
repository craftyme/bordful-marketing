import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { cn } from "@/lib/utils";

interface Technology {
  name: string;
  description: string;
  icon: React.ReactElement;
}

const TechIcon = ({
  children,
  className,
  viewBox = "0 0 24 24",
}: {
  children: React.ReactNode;
  className?: string;
  viewBox?: string;
}) => (
  <svg viewBox={viewBox} className={cn("h-5 w-5 fill-current", className)}>
    {children}
  </svg>
);

const techStack: Technology[] = [
  {
    name: "Next.js",
    description: "React framework for production",
    icon: (
      <TechIcon>
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </TechIcon>
    ),
  },
  {
    name: "Airtable",
    description: "Powerful database & CMS",
    icon: (
      <TechIcon viewBox="0 0 750 628">
        <path d="M21.225 192C21.025 192 20.775 191.975 20.5 191.975C14.925 191.975 9.87498 194.25 6.22498 197.925C2.69998 201.075 0.374976 205.525 0.0999756 210.525V210.575V471.6C0.699976 482.1 9.37498 490.375 19.95 490.375C23.05 490.375 25.975 489.675 28.575 488.4L28.45 488.45L233.925 389.95L326.675 345.1C332.825 341.975 336.95 335.7 336.95 328.45C336.95 320.475 331.95 313.675 324.9 311.025L324.775 310.975L27.675 193.325C25.775 192.5 23.55 192 21.225 191.95V192ZM731.15 190.775C728.65 190.8 726.275 191.3 724.1 192.225L724.225 192.175L411.45 313.3C404.45 316.225 399.6 323 399.575 330.925V608.85C399.675 619.125 408.025 627.425 418.325 627.425C420.8 627.425 423.175 626.95 425.35 626.05L425.225 626.1L738.05 504.575C745.05 501.925 749.925 495.275 749.925 487.5C749.925 487.45 749.925 487.4 749.925 487.35V209.425C749.85 199.125 741.5 190.8 731.175 190.8L731.15 190.775ZM374.75 0.525391C360.325 0.525391 346.575 3.47539 334.075 8.80039L334.75 8.55039L55.675 123.95C48.825 126.85 44.1 133.525 44.1 141.3C44.1 149.225 49 156 55.925 158.775L56.05 158.825L336.65 269.975C348 274.7 361.175 277.45 374.975 277.45C388.775 277.45 401.975 274.7 413.975 269.725L413.3 269.975L693.9 158.825C700.9 155.95 705.725 149.2 705.725 141.325C705.725 133.575 701.05 126.925 694.4 124.025L694.275 123.975L414.45 8.57539C402.75 3.50039 389.15 0.550389 374.85 0.550389C374.8 0.550389 374.75 0.550389 374.7 0.550389L374.75 0.525391Z" />
      </TechIcon>
    ),
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: (
      <TechIcon>
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </TechIcon>
    ),
  },
  {
    name: "shadcn/ui",
    description: "Beautifully designed components",
    icon: (
      <TechIcon viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <line
          x1="208"
          y1="128"
          x2="128"
          y2="208"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <line
          x1="192"
          y1="40"
          x2="40"
          y2="192"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </TechIcon>
    ),
  },
  {
    name: "GitHub",
    description: "Version control & collaboration",
    icon: (
      <TechIcon>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </TechIcon>
    ),
  },
  {
    name: "Vercel",
    description: "Deploy and scale with ease",
    icon: (
      <TechIcon>
        <path d="M12 1L24 22H0L12 1Z" />
      </TechIcon>
    ),
  },
];

const TechCard = React.memo(function TechCard({
  name,
  description,
  icon,
}: Technology) {
  return (
    <div className="flex items-start gap-4 rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80">
      {icon}
      <div>
        <h3 className="mb-1 text-sm font-medium">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
});

export function TechStack() {
  return (
    <Section>
      <Container>
        <h2 className="text-center text-2xl font-medium tracking-tight sm:text-3xl">
          Built with Modern Stack
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-center text-sm text-muted-foreground">
          Powered by the latest technologies and tools to ensure scalability,
          performance, and developer experience. Start for free.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
