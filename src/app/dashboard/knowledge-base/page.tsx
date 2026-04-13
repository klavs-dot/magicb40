"use client";

import React from "react";
import {
  Search,
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

export default function KnowledgeBasePage() {
  return (
    <ModulePage
      title="Knowledge Base & Best Practice Search"
      subtitle="Search and discover best practices, templates, and institutional knowledge"
      icon={Search}
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
        <StatCard label="Total Articles" value="\u2014" delay={0} />
        <StatCard label="Recent" value="\u2014" delay={1} />
        <StatCard label="Popular" value="\u2014" delay={2} />
        <StatCard label="Bookmarked" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Articles", "Recent", "Popular", "Bookmarked", "Categories"]} />

      {/* Empty State */}
      <EmptyState
        icon={Search}
        title="No data yet"
        description="Set up this module to start tracking best practices and search. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Title", "Category", "Author", "Views", "Updated"]} rows={0} />
    </ModulePage>
  );
}
