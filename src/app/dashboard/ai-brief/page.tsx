"use client";

import React from "react";
import {
  Brain,
  Plus,
  Download,
  Settings2,
} from "lucide-react";
import {
  ModulePage,
  EmptyState,
  FilterBar,
  TableShell,
  StatCard,
} from "@/components/ui/design-system";
import { Button } from "@/components/ui/button";

export default function AiBriefPage() {
  return (
    <ModulePage
      title="AI Brief Analysis Assistant"
      subtitle="Let AI analyze briefs for completeness, opportunities, and risks"
      icon={Brain}
      actions={
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="h-3.5 w-3.5" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Settings2 className="h-3.5 w-3.5" />
            Configure
          </Button>
          <Button variant="gold" size="sm" className="gap-1.5">
            <Plus className="h-3.5 w-3.5" />
            New
          </Button>
        </div>
      }
    >
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total Analyses" value="\u2014" delay={0} />
        <StatCard label="Recent" value="\u2014" delay={1} />
        <StatCard label="Saved" value="\u2014" delay={2} />
        <StatCard label="Templates" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Analyses", "Recent", "Saved", "Templates", "Archive"]} />

      {/* Empty State */}
      <EmptyState
        icon={Brain}
        title="No data yet"
        description="Set up this module to start tracking ai-powered brief analysis. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Brief", "Score", "Issues", "Suggestions", "Date"]} rows={0} />
    </ModulePage>
  );
}
