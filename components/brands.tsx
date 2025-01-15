import * as React from "react";
import Image from "next/image";

const brands = [
  {
    name: "Best writing",
    url: "/images/logos/bestwriting.svg",
    width: 117,
    height: 21,
    link: "https://bestwriting.com/",
  },
  {
    name: "Marketful",
    url: "/images/logos/marketful.svg",
    width: 154,
    height: 22,
    link: "https://marketful.com/",
  },
  {
    name: "Pynions",
    url: "/images/logos/pynions.svg",
    width: 89,
    height: 21,
    link: "https://pynions.com/",
  },
  {
    name: "UIthings",
    url: "/images/logos/uithings.svg",
    width: 136,
    height: 22,
    link: "https://uithings.com/",
  },
  {
    name: "Growthlog",
    url: "/images/logos/growthlog.svg",
    width: 121,
    height: 21,
    link: "https://growthlog.co/",
  },
];

export function Brands() {
  return (
    <section className="py-6 md:py-8">
      <div className="container max-w-3xl">
        <div className="text-center space-y-1.5 mb-8">
          <p className="text-base font-medium text-muted-foreground">
            Built for makers and founders
          </p>
          <p className="text-sm text-muted-foreground/80">
            From the team behind these indie products
          </p>
        </div>

        <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {brands.map(({ name, url, width, height, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center group"
            >
              <Image
                src={url}
                alt={name}
                width={width}
                height={height}
                className="opacity-50 transition-opacity duration-200 group-hover:opacity-100 w-auto h-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
