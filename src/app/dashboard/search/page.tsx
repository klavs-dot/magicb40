"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { PageHeader, EmptyState } from "@/components/ui/design-system";
import { Button } from "@/components/ui/button";

export default function SearchPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Search"
        subtitle="Find anything across MAGIC B40"
        icon={Search}
      />

      {/* Search Input */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search projects, clients, tasks, documents..."
          autoFocus
          className="h-14 w-full rounded-xl border border-border/50 bg-card/50 pl-12 pr-4 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
        />
      </motion.div>

      {/* Filters */}
      <div className="flex items-center gap-2 flex-wrap">
        {["All", "Projects", "Tasks", "Clients", "Documents", "People"].map((f, i) => (
          <button
            key={f}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              i === 0
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground border border-border/30 hover:border-border/50"
            }`}
          >
            {f}
          </button>
        ))}
        <Button variant="outline" size="sm" className="ml-auto gap-1.5 h-8 text-xs">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Advanced
        </Button>
      </div>

      <EmptyState
        icon={Search}
        title="Start searching"
        description="Type a keyword to search across all modules, projects, clients, and documents in your MAGIC B40 system."
      />
    </div>
  );
}
