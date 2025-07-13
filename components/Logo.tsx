import { cn } from "@/lib/utils";
import Link from "next/link"; // Changed from lucide-react to next/link
import { ReactNode } from "react"; // Explicitly import ReactNode

interface Props {
  children: ReactNode;
  className?: string;
}

const Logo = ({ children, className }: Props) => {
  return (
    <Link href="/">
      <h2
        className={cn(
          "text-2xl text-darkColor font-blank font-bold tracking-wider uppercase",
          className // Pass className to cn for custom styling
        )}
      >
        {children}
      </h2>
    </Link>
  );
};

export default Logo;