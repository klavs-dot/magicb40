"use client";

import React from "react";
import {
  Calculator,
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

export default function ProposalsPage() {
  return (
    <ModulePage
      title="Proposal & Estimate Generator"
      subtitle="Create and manage proposals, cost estimates, and client pricing"
      icon={Calculator}
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
        <StatCard label="Total Proposals" value="\u2014" delay={0} />
        <StatCard label="Active" value="\u2014" delay={1} />
        <StatCard label="Sent" value="\u2014" delay={2} />
        <StatCard label="Won" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Proposals", "Active", "Sent", "Won", "Lost"]} />

      {/* Empty State */}
      <EmptyState
        icon={Calculator}
        title="No data yet"
        description="Set up this module to start tracking generate proposals, estimates, and pricing. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Client", "Value", "Status", "Sent Date", "Owner"]} rows={0} />
    </ModulePage>
  );
}
