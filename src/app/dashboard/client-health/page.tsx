"use client";

import React from "react";
import {
  HeartPulse,
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

export default function ClientHealthPage() {
  return (
    <ModulePage
      title="Client Health & Churn Alerts"
      subtitle="Monitor client satisfaction scores and early churn indicators"
      icon={HeartPulse}
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
        <StatCard label="Total Clients" value="\u2014" delay={0} />
        <StatCard label="Healthy" value="\u2014" delay={1} />
        <StatCard label="At Risk" value="\u2014" delay={2} />
        <StatCard label="Critical" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Clients", "Healthy", "At Risk", "Critical", "Churned"]} />

      {/* Empty State */}
      <EmptyState
        icon={HeartPulse}
        title="No data yet"
        description="Set up this module to start tracking client satisfaction monitoring. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Client", "Health Score", "NPS", "Revenue", "Trend"]} rows={0} />
    </ModulePage>
  );
}
