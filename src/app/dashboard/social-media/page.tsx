"use client";

import React from "react";
import {
  Share2,
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

export default function SocialMediaPage() {
  return (
    <ModulePage
      title="Social Media Content OS"
      subtitle="Plan, create, schedule and publish social media content"
      icon={Share2}
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
        <StatCard label="Total Posts" value="\u2014" delay={0} />
        <StatCard label="Scheduled" value="\u2014" delay={1} />
        <StatCard label="Published" value="\u2014" delay={2} />
        <StatCard label="Draft" value="\u2014" delay={3} />
      </div>

      {/* Filters */}
      <FilterBar filters={["Posts", "Scheduled", "Published", "Draft", "Review"]} />

      {/* Empty State */}
      <EmptyState
        icon={Share2}
        title="No data yet"
        description="Set up this module to start tracking content planning and publishing. Data will appear here once configured."
        action={{ label: "Set Up Module" }}
      />

      {/* Table Shell */}
      <TableShell columns={["Content", "Platform", "Status", "Date", "Engagement"]} rows={0} />
    </ModulePage>
  );
}
