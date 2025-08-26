import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const Logo = ({
  href,
  width = 211,
  height = 42,
  className,
  priority = false,
}: LogoProps) => {
  const logoContent = (
    <>
      <Image
        src="/logo1.svg"
        alt="VSGO Logo"
        width={width}
        height={height}
        priority={priority}
        className="dark:hidden"
      />
      <Image
        src="/logo1-light.svg"
        alt="VSGO Logo"
        width={width}
        height={height}
        priority
        className="hidden dark:block"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn("w-fit flex items-center", className)}>
        {logoContent}
      </Link>
    );
  }

  return (
    <div className={cn("w-fit rounded-xl flex items-center", className)}>
      {logoContent}
    </div>
  );
};
