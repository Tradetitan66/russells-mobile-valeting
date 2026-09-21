import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background hover:bg-accent hover:text-dark",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-foreground hover:text-accent",
  light: "bg-dark text-light hover:bg-accent hover:text-dark",
  outline:
    "bg-transparent text-light border border-dark/20 hover:border-dark hover:bg-dark hover:text-light",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-11 px-5 text-xs tracking-[0.14em]",
  md: "h-12 px-6 text-xs tracking-[0.16em]",
  lg: "h-14 px-8 text-xs tracking-[0.16em]",
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
  type?: never;
  disabled?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  external?: never;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

function ButtonContent({
  children,
  showArrow,
}: {
  children: React.ReactNode;
  showArrow: boolean;
}) {
  return (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </>
  );
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const showArrow = props.showArrow ?? false;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium uppercase transition-colors duration-300 min-w-[44px] disabled:opacity-50 disabled:pointer-events-none group",
    variants[variant],
    sizes[size],
    props.className,
  );

  if (props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={props.onClick}
        >
          <ButtonContent showArrow={showArrow}>{props.children}</ButtonContent>
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        <ButtonContent showArrow={showArrow}>{props.children}</ButtonContent>
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      className={classes}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <ButtonContent showArrow={showArrow}>{props.children}</ButtonContent>
    </button>
  );
}
