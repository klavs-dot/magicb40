"use client";

import React from "react";
import {
  Users,
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

export default function TalentVendorsPage() {
  return (
    <ModulePage
      title="Talent / Freelancer / Vendor Management"
      subtitle="Manage your extended creative network and vendor relationships"
      icon={Users}
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
        <StatCard label="Total People" value="\u2014" delay={0} />
        <StatCard label="Active" value="\u2014" delay={1} />
        <StatCard label="Preferred" value="\u2014" delay={2} />
        <StatCard label="On Hold" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["People", "Active", "Preferred", "On Hold", "Archived"]} />

      {/* Empty State */}
      <EmptyState
        icon={Users}
        title="No data yet"
        description="Set up this module to start tracking freelancer and vendor management. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Name", "Specialty", "Rate", "Rating", "Last Engaged"]} rows={0} />
    </ModulePage>
  );
}
