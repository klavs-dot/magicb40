"use client";

import React from "react";
import {
  BookOpen,
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

export default function CaseStudiesPage() {
  return (
    <ModulePage
      title="Case Study / Post-Campaign Generator"
      subtitle="Auto-generate case studies from campaign data and results"
      icon={BookOpen}
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
        <StatCard label="Total Studies" value="\u2014" delay={0} />
        <StatCard label="Draft" value="\u2014" delay={1} />
        <StatCard label="Review" value="\u2014" delay={2} />
        <StatCard label="Published" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Studies", "Draft", "Review", "Published", "Archive"]} />

      {/* Empty State */}
      <EmptyState
        icon={BookOpen}
        title="No data yet"
        description="Set up this module to start tracking post-campaign documentation. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Title", "Campaign", "Client", "Status", "Impact"]} rows={0} />
    </ModulePage>
  );
}
