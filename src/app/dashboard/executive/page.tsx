"use client";

import React from "react";
import {
  Crown,
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

export default function ExecutivePage() {
  return (
    <ModulePage
      title="CEO / Directors Executive Cockpit"
      subtitle="Complete strategic visibility for executive decision-making"
      icon={Crown}
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
        <StatCard label="Total Views" value="\u2014" delay={0} />
        <StatCard label="Financial" value="\u2014" delay={1} />
        <StatCard label="Operational" value="\u2014" delay={2} />
        <StatCard label="Strategic" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Views", "Financial", "Operational", "Strategic", "People"]} />

      {/* Empty State */}
      <EmptyState
        icon={Crown}
        title="No data yet"
        description="Set up this module to start tracking executive strategic overview. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Metric", "Status", "Target", "Actual", "Action Required"]} rows={0} />
    </ModulePage>
  );
}
