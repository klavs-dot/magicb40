"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Users,
  Building2,
  Shield,
  Plug,
  Paintbrush,
  Bell,
  FileText,
  ChevronRight,
} from "lucide-react";
import { PageHeader, EmptyState } from "@/components/ui/design-system";
import { cn } from "@/lib/utils";

const settingsSections = [
  { id: "general", label: "General", icon: Settings, description: "Basic system configuration and preferences" },
  { id: "users", label: "Users & Roles", icon: Users, description: "Manage user accounts and role assignments" },
  { id: "departments", label: "Departments", icon: Building2, description: "Configure department structure and hierarchy" },
  { id: "permissions", label: "Permissions", icon: Shield, description: "Access control and permission templates" },
  { id: "integrations", label: "Integrations", icon: Plug, description: "Third-party service connections" },
  { id: "branding", label: "Branding", icon: Paintbrush, description: "Customize logos, colors, and themes" },
  { id: "notifications", label: "Notifications", icon: Bell, description: "Email, push, and in-app notification rules" },
  { id: "audit", label: "Audit Log", icon: FileText, description: "System activity and change history" },
];

export default function SettingsPage() {
  const [active, setActive] = useState("general");
  const activeSection = settingsSections.find((s) => s.id === active);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        subtitle="Configure your MAGIC B40 operating system"
        icon={Settings}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Nav */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {settingsSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActive(section.id)}
                  className={cn(
                    "w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all text-left",
                    active === section.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{section.label}</span>
                  {active === section.id && <ChevronRight className="h-3.5 w-3.5 ml-auto" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-border/50 bg-card/30 p-6"
          >
            <div className="mb-6">
              <h2 className="text-lg font-semibold">{activeSection?.label}</h2>
              <p className="text-sm text-muted-foreground mt-1">{activeSection?.description}</p>
            </div>
            <EmptyState
              icon={activeSection?.icon || Settings}
              title="Not configured yet"
              description={`${activeSection?.label} settings will be available here once implemented.`}
              action={{ label: "Configure" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
