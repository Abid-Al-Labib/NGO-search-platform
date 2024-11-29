"use client";

import { cn } from "@/lib/utils";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children?: React.ReactNode;
}

export default function ShineBorder({
  borderRadius = 8,
  borderWidth = 1.5,
  duration = 14,
  color,
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={{
        "--border-radius": `${borderRadius}px`,
        "--border-width": `${borderWidth}px`,
        "--duration": `${duration}s`,
        "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
        "--background-radial-gradient": `radial-gradient(transparent, transparent, ${color instanceof Array ? color.join(",") : color
          }, transparent, transparent)`,
      } as React.CSSProperties} // Explicitly cast to React.CSSProperties
      className={cn(
        "relative rounded-[--border-radius] w-full h-full",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[--border-radius] p-[--border-width] will-change-[background-position]",
          "before:absolute before:inset-0 before:rounded-[--border-radius] before:p-[--border-width]",
          "before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor]",
          "before:![mask-composite:exclude] before:[background-image:var(--background-radial-gradient)]",
          "before:[background-size:300%_300%] before:[mask:var(--mask-linear-gradient)]",
          "motion-safe:before:animate-shine"
        )}
      ></div>
      {children}
    </div>
  );
}
