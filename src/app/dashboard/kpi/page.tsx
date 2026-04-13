"use client";

import React from "react";
import {
  BarChart3,
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

export default function KpiPage() {
  return (
    <ModulePage
      title="KPI / Performance Executive Dashboard"
      subtitle="Track key performance indicators across all business units"
      icon={BarChart3}
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
        <StatCard label="Total KPIs" value="\u2014" delay={0} />
        <StatCard label="Company" value="\u2014" delay={1} />
        <StatCard label="Department" value="\u2014" delay={2} />
        <StatCard label="Team" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["KPIs", "Company", "Department", "Team", "Individual"]} />

      {/* Empty State */}
      <EmptyState
        icon={BarChart3}
        title="No data yet"
        description="Set up this module to start tracking performance metrics. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["KPI", "Target", "Actual", "Variance", "Period"]} rows={0} />
    </ModulePage>
  );
}
