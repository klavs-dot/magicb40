"use client";

import React from "react";
import {
  CalendarRange,
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

export default function ResourcePlanningPage() {
  return (
    <ModulePage
      title="Resource Planning Dashboard"
      subtitle="Plan team allocation, track capacity, and prevent bottlenecks"
      icon={CalendarRange}
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
        <StatCard label="Total Resources" value="\u2014" delay={0} />
        <StatCard label="Available" value="\u2014" delay={1} />
        <StatCard label="Allocated" value="\u2014" delay={2} />
        <StatCard label="Over-allocated" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Resources", "Available", "Allocated", "Over-allocated", "On Leave"]} />

      {/* Empty State */}
      <EmptyState
        icon={CalendarRange}
        title="No data yet"
        description="Set up this module to start tracking team capacity management. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Person", "Department", "Utilization", "Projects", "Availability"]} rows={0} />
    </ModulePage>
  );
}
