"use client";

import React from "react";
import {
  GitBranch,
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

export default function TaskRoutingPage() {
  return (
    <ModulePage
      title="Cross-B40 Task Routing Engine"
      subtitle="Distribute and route tasks across all B40 departments"
      icon={GitBranch}
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
        <StatCard label="Total Tasks" value="\u2014" delay={0} />
        <StatCard label="Queued" value="\u2014" delay={1} />
        <StatCard label="In Progress" value="\u2014" delay={2} />
        <StatCard label="Blocked" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Tasks", "Queued", "In Progress", "Blocked", "Done"]} />

      {/* Empty State */}
      <EmptyState
        icon={GitBranch}
        title="No data yet"
        description="Set up this module to start tracking cross-b40 task distribution. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Task", "Source", "Destination", "Priority", "SLA"]} rows={0} />
    </ModulePage>
  );
}
