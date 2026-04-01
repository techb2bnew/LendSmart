"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variantsUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const variantsFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const variantsDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0 },
};

type AnimationMode = "fade-up" | "fade" | "fade-down";

export default function AnimateSection({
  children,
  className,
  delay = 0,
  mode = "fade-up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  mode?: AnimationMode;
}) {
  const reduceMotion = useReducedMotion();
  const v =
    mode === "fade" ? variantsFade : mode === "fade-down" ? variantsDown : variantsUp;

  return (
    <motion.div
      className={["overflow-visible", className].filter(Boolean).join(" ")}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-48px 0px", amount: 0.12 }}
      variants={v}
      transition={{
        duration: reduceMotion ? 0 : 0.52,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
