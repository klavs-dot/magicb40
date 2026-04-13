"use client";

import React from "react";
import {
  RefreshCcw,
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

export default function ChangeRequestsPage() {
  return (
    <ModulePage
      title="Change Request Control"
      subtitle="Log, review, and manage all project change requests"
      icon={RefreshCcw}
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
        <StatCard label="Total Requests" value="\u2014" delay={0} />
        <StatCard label="Open" value="\u2014" delay={1} />
        <StatCard label="Under Review" value="\u2014" delay={2} />
        <StatCard label="Approved" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Requests", "Open", "Under Review", "Approved", "Implemented"]} />

      {/* Empty State */}
      <EmptyState
        icon={RefreshCcw}
        title="No data yet"
        description="Set up this module to start tracking track and manage change requests. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Request", "Project", "Impact", "Status", "Requester"]} rows={0} />
    </ModulePage>
  );
}
