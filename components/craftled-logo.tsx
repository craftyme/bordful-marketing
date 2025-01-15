import Image from "next/image";

export function CraftledLogo() {
  return (
    <Image
      src="/images/logos/craftled.svg"
      alt="Craftled"
      width={16}
      height={16}
      className="shrink-0 dark:invert"
    />
  );
}
