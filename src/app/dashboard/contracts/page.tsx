"use client";

import React from "react";
import {
  FileSignature,
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

export default function ContractsPage() {
  return (
    <ModulePage
      title="Contracts / SOW / NDA Automation"
      subtitle="Generate, track, and manage all legal documents"
      icon={FileSignature}
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
        <StatCard label="Total Documents" value="\u2014" delay={0} />
        <StatCard label="Draft" value="\u2014" delay={1} />
        <StatCard label="Pending Signature" value="\u2014" delay={2} />
        <StatCard label="Active" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Documents", "Draft", "Pending Signature", "Active", "Expired"]} />

      {/* Empty State */}
      <EmptyState
        icon={FileSignature}
        title="No data yet"
        description="Set up this module to start tracking contract and document automation. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Document", "Client", "Type", "Status", "Expiry"]} rows={0} />
    </ModulePage>
  );
}
