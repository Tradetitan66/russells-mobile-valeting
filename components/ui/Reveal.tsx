"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  const motionProps = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" as const },
        transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1] as const,
          delay,
        },
      };

  if (as === "li") {
    return (
      <motion.li className={cn(className)} {...motionProps}>
        {children}
      </motion.li>
    );
  }

  if (as === "section") {
    return (
      <motion.section className={cn(className)} {...motionProps}>
        {children}
      </motion.section>
    );
  }

  if (as === "article") {
    return (
      <motion.article className={cn(className)} {...motionProps}>
        {children}
      </motion.article>
    );
  }

  return (
    <motion.div className={cn(className)} {...motionProps}>
      {children}
    </motion.div>
  );
}
