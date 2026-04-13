"use client";

import React from "react";
import {
  Target,
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

export default function CrmPage() {
  return (
    <ModulePage
      title="New Business CRM & Lead Scoring"
      subtitle="Track leads, score opportunities, and manage the sales pipeline"
      icon={Target}
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
        <StatCard label="Total Leads" value="\u2014" delay={0} />
        <StatCard label="New" value="\u2014" delay={1} />
        <StatCard label="Qualified" value="\u2014" delay={2} />
        <StatCard label="Proposal" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Leads", "New", "Qualified", "Proposal", "Negotiation"]} />

      {/* Empty State */}
      <EmptyState
        icon={Target}
        title="No data yet"
        description="Set up this module to start tracking lead tracking and pipeline. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Lead", "Company", "Score", "Value", "Stage"]} rows={0} />
    </ModulePage>
  );
}
