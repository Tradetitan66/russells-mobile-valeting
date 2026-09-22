"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
};

interface MenuVerticalProps {
  menuItems: MenuItem[];
  color?: string;
  skew?: number;
  onNavigate?: () => void;
}

const MotionLink = motion.create(Link);

export const MenuVertical = ({
  menuItems = [],
  color = "#c8c2b4",
  skew = 0,
  onNavigate,
}: MenuVerticalProps) => {
  return (
    <div className="flex w-fit flex-col gap-4">
      {menuItems.map((item, index) => (
        <motion.div
          key={`${item.href}-${index}`}
          className="group/nav flex items-center gap-3 overflow-hidden cursor-pointer text-foreground"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            variants={{
              initial: { x: "-120%", color: "inherit", opacity: 0 },
              hover: { x: 0, color, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            aria-hidden
          >
            <ArrowRight strokeWidth={3} className="size-8 md:size-10" />
          </motion.div>

          <MotionLink
            href={item.href}
            onClick={onNavigate}
            variants={{
              initial: { x: -48, color: "inherit" },
              hover: { x: 0, color, skewX: skew },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-semibold text-3xl md:text-4xl no-underline tracking-tight"
          >
            {item.label}
          </MotionLink>
        </motion.div>
      ))}
    </div>
  );
};