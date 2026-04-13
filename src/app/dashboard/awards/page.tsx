"use client";

import React from "react";
import {
  Award,
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

export default function AwardsPage() {
  return (
    <ModulePage
      title="Awards / Submission Management"
      subtitle="Track award submissions, deadlines, and results"
      icon={Award}
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
        <StatCard label="Total Submissions" value="\u2014" delay={0} />
        <StatCard label="Preparing" value="\u2014" delay={1} />
        <StatCard label="Submitted" value="\u2014" delay={2} />
        <StatCard label="Shortlisted" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Submissions", "Preparing", "Submitted", "Shortlisted", "Won"]} />

      {/* Empty State */}
      <EmptyState
        icon={Award}
        title="No data yet"
        description="Set up this module to start tracking award submission tracking. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Award", "Category", "Campaign", "Deadline", "Status"]} rows={0} />
    </ModulePage>
  );
}
