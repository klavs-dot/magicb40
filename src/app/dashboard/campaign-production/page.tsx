"use client";

import React from "react";
import {
  Clapperboard,
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

export default function CampaignProductionPage() {
  return (
    <ModulePage
      title="Campaign Production Control Center"
      subtitle="Oversee all campaign production workflows and timelines"
      icon={Clapperboard}
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
        <StatCard label="Total Campaigns" value="\u2014" delay={0} />
        <StatCard label="Pre-production" value="\u2014" delay={1} />
        <StatCard label="Production" value="\u2014" delay={2} />
        <StatCard label="Post-production" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Campaigns", "Pre-production", "Production", "Post-production", "Live"]} />

      {/* Empty State */}
      <EmptyState
        icon={Clapperboard}
        title="No data yet"
        description="Set up this module to start tracking production tracking and control center. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Campaign", "Client", "Stage", "Budget", "Timeline"]} rows={0} />
    </ModulePage>
  );
}
