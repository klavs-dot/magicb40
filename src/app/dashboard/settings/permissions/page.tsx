"use client";

import React from "react";
import { Shield } from "lucide-react";
import { PageHeader, EmptyState } from "@/components/ui/design-system";

export default function PermissionsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Permissions"
        subtitle="Configure access control and role-based permissions"
        icon={Shield}
      />
      <EmptyState
        icon={Shield}
        title="Permissions not configured"
        description="Set up role-based access control to manage what each user role can see and do across all modules."
        action={{ label: "Configure Permissions" }}
      />
    </div>
  );
}
