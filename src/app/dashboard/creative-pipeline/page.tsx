"use client";

import React from "react";
import {
  Palette,
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

export default function CreativePipelinePage() {
  return (
    <ModulePage
      title="Creative Work Pipeline"
      subtitle="Manage creative projects from concept through final delivery"
      icon={Palette}
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
        <StatCard label="Total Projects" value="\u2014" delay={0} />
        <StatCard label="In Progress" value="\u2014" delay={1} />
        <StatCard label="Review" value="\u2014" delay={2} />
        <StatCard label="Approved" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Projects", "In Progress", "Review", "Approved", "On Hold"]} />

      {/* Empty State */}
      <EmptyState
        icon={Palette}
        title="No data yet"
        description="Set up this module to start tracking track creative work across all stages. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Project", "Creative Lead", "Stage", "Deadline", "Priority"]} rows={0} />
    </ModulePage>
  );
}
