"use client";

import React from "react";
import {
  CheckSquare,
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

export default function ClientApprovalsPage() {
  return (
    <ModulePage
      title="Client Approval Portal"
      subtitle="Track client feedback, revisions, and approval status"
      icon={CheckSquare}
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
        <StatCard label="Total Items" value="\u2014" delay={0} />
        <StatCard label="Pending" value="\u2014" delay={1} />
        <StatCard label="Approved" value="\u2014" delay={2} />
        <StatCard label="Revision" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Items", "Pending", "Approved", "Revision", "Rejected"]} />

      {/* Empty State */}
      <EmptyState
        icon={CheckSquare}
        title="No data yet"
        description="Set up this module to start tracking manage approval workflows and feedback. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Asset", "Client", "Round", "Status", "Due Date"]} rows={0} />
    </ModulePage>
  );
}
