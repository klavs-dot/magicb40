"use client";

import { cn } from "@/lib/utils";

interface FooterProps {
  sidebarCollapsed: boolean;
}

export function Footer({ sidebarCollapsed }: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t border-border/20 py-4 px-6 text-center transition-all duration-300",
        sidebarCollapsed ? "ml-[72px]" : "ml-[260px]"
      )}
    >
      <p className="text-xs text-muted-foreground/50">
        made by{" "}
        <a
          href="https://www.globalwm.lv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground/70 hover:text-primary transition-colors"
        >
          www.globalwm.lv
        </a>
      </p>
    </footer>
  );
}
