"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bell, CheckCheck, Filter, Settings2 } from "lucide-react";
import { PageHeader, EmptyState, FilterBar } from "@/components/ui/design-system";
import { Button } from "@/components/ui/button";

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications"
        subtitle="Stay updated on what matters"
        icon={Bell}
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1.5">
              <CheckCheck className="h-3.5 w-3.5" />
              Mark All Read
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5">
              <Settings2 className="h-3.5 w-3.5" />
              Preferences
            </Button>
          </div>
        }
      />

      <FilterBar filters={["All", "Unread", "Mentions", "Approvals", "System"]} />

      <EmptyState
        icon={Bell}
        title="No notifications"
        description="You're all caught up. Notifications about tasks, approvals, and system events will appear here."
      />

      {/* Notification skeleton list */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-2"
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-xl border border-border/30 bg-card/20 p-4 opacity-30"
          >
            <div className="h-10 w-10 rounded-full bg-muted/30 shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-3/4 rounded-full bg-muted/30" />
              <div className="h-2.5 w-1/2 rounded-full bg-muted/20" />
              <div className="h-2 w-20 rounded-full bg-muted/15" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
