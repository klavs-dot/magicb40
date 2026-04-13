"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { Footer } from "./footer";
import { TooltipProvider } from "@/components/ui/tooltip";

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background noise-overlay">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <Header
          sidebarCollapsed={sidebarCollapsed}
          onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <motion.main
          animate={{
            marginLeft: sidebarCollapsed ? 72 : 260,
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="min-h-[calc(100vh-4rem)] p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </motion.main>
        <Footer sidebarCollapsed={sidebarCollapsed} />
      </div>
    </TooltipProvider>
  );
}
