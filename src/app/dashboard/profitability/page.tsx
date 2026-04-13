"use client";

import React from "react";
import {
  PieChart,
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

export default function ProfitabilityPage() {
  return (
    <ModulePage
      title="Profitability Dashboard by Client / Project"
      subtitle="Analyze profitability across clients, projects, and departments"
      icon={PieChart}
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
        <StatCard label="Total Reports" value="\u2014" delay={0} />
        <StatCard label="Monthly" value="\u2014" delay={1} />
        <StatCard label="Quarterly" value="\u2014" delay={2} />
        <StatCard label="By Client" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Reports", "Monthly", "Quarterly", "By Client", "By Project"]} />

      {/* Empty State */}
      <EmptyState
        icon={PieChart}
        title="No data yet"
        description="Set up this module to start tracking client and project profitability. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Entity", "Revenue", "Cost", "Margin", "Trend"]} rows={0} />
    </ModulePage>
  );
}
