"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Building2, Shield, Calendar, MapPin, Phone, Globe } from "lucide-react";
import { PageHeader, EmptyState } from "@/components/ui/design-system";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Profile" subtitle="Manage your account and preferences" icon={User} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-border/50 bg-card/50 p-6 text-center"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/20 text-primary text-2xl font-display font-semibold mx-auto mb-4">
            B4
          </div>
          <h2 className="text-lg font-semibold">Admin User</h2>
          <p className="text-sm text-muted-foreground">CEO / Executive</p>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Building2 className="h-3.5 w-3.5" />
            <span>MAGIC B40 Group</span>
          </div>
          <div className="mt-1 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>Riga, Latvia</span>
          </div>
          <Button variant="outline" size="sm" className="mt-5 w-full">
            Edit Profile
          </Button>
        </motion.div>

        {/* Profile Details */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 space-y-4"
        >
          <div className="rounded-xl border border-border/50 bg-card/50 p-6">
            <h3 className="text-sm font-semibold mb-4">Account Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Mail, label: "Email", value: "admin@b40.group" },
                { icon: Phone, label: "Phone", value: "Not set" },
                { icon: Shield, label: "Role", value: "CEO / Executive" },
                { icon: Building2, label: "Department", value: "Executive / Board" },
                { icon: Calendar, label: "Joined", value: "Not set" },
                { icon: Globe, label: "Timezone", value: "Europe/Riga" },
              ].map((field) => (
                <div key={field.label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/30">
                    <field.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{field.label}</p>
                    <p className="text-sm">{field.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/50 p-6">
            <h3 className="text-sm font-semibold mb-4">Preferences</h3>
            <EmptyState
              icon={User}
              title="Preferences not configured"
              description="Personal preferences and notification settings will appear here."
              action={{ label: "Set Up Preferences" }}
              className="py-8"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
