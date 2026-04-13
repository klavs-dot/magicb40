"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Users,
  Target,
  Clapperboard,
  TrendingUp,
  DollarSign,
  Bell,
  ArrowUpRight,
  Sparkles,
  BarChart3,
} from "lucide-react";
import { PageHeader, StatCard, PlaceholderCard, SectionHeader, StatusPill } from "@/components/ui/design-system";
import { Button } from "@/components/ui/button";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        title="Good morning"
        subtitle="Here's your operating overview for today"
        icon={LayoutDashboard}
        actions={
          <div className="flex items-center gap-2">
            <StatusPill label="CEO View" variant="gold" />
            <Button variant="outline" size="sm" className="gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              AI Summary
            </Button>
          </div>
        }
      />

      {/* Quick Stats Row */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <motion.div variants={fadeUp}>
          <StatCard label="Today's Tasks" value="—" icon={Clock} trend="No data yet" delay={0} />
        </motion.div>
        <motion.div variants={fadeUp}>
          <StatCard label="At Risk" value="—" icon={AlertTriangle} trend="No alerts" delay={1} />
        </motion.div>
        <motion.div variants={fadeUp}>
          <StatCard label="Pending Approvals" value="—" icon={CheckCircle2} trend="No pending" delay={2} />
        </motion.div>
        <motion.div variants={fadeUp}>
          <StatCard label="Team Capacity" value="—" icon={Users} trend="Not configured" delay={3} />
        </motion.div>
        <motion.div variants={fadeUp} className="hidden lg:block">
          <StatCard label="New Leads" value="—" icon={Target} trend="No leads yet" delay={4} />
        </motion.div>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - 2/3 */}
        <div className="lg:col-span-2 space-y-6">
          {/* Specialist View */}
          <div>
            <SectionHeader
              title="Specialist View"
              description="Daily workload & assignments"
              action={<Button variant="ghost" size="sm" className="text-xs gap-1">View All <ArrowUpRight className="h-3 w-3" /></Button>}
            />
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <PlaceholderCard title="My Tasks Today" icon={Clock} delay={0}>
                <div className="space-y-2.5 mt-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-muted/40" />
                      <div className="h-2.5 flex-1 rounded-full bg-muted/30" />
                      <div className="h-5 w-14 rounded-full bg-muted/20" />
                    </div>
                  ))}
                </div>
              </PlaceholderCard>
              <PlaceholderCard title="Active Projects" icon={Clapperboard} delay={1}>
                <div className="space-y-2.5 mt-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-muted/30" />
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2.5 w-3/4 rounded-full bg-muted/30" />
                        <div className="h-2 w-1/2 rounded-full bg-muted/20" />
                      </div>
                    </div>
                  ))}
                </div>
              </PlaceholderCard>
            </div>
          </div>

          {/* Team Lead View */}
          <div>
            <SectionHeader
              title="Team Lead View"
              description="Team performance & capacity"
              action={<Button variant="ghost" size="sm" className="text-xs gap-1">Details <ArrowUpRight className="h-3 w-3" /></Button>}
            />
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <PlaceholderCard title="Team Workload" icon={Users} delay={2}>
                <div className="space-y-3 mt-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="h-2 w-20 rounded-full bg-muted/30" />
                        <div className="h-2 w-8 rounded-full bg-muted/20" />
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-muted/20 overflow-hidden">
                        <div className="h-full rounded-full bg-primary/20" style={{ width: `${20 + i * 15}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </PlaceholderCard>
              <PlaceholderCard title="Production Status" icon={BarChart3} delay={3}>
                <div className="flex items-end gap-2 mt-3 h-24">
                  {[40, 65, 35, 80, 55, 70, 45].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-primary/10 transition-all" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </PlaceholderCard>
            </div>
          </div>

          {/* Management View */}
          <div>
            <SectionHeader
              title="Management View"
              description="Revenue, profitability & strategic KPIs"
              action={<Button variant="ghost" size="sm" className="text-xs gap-1">Executive View <ArrowUpRight className="h-3 w-3" /></Button>}
            />
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <PlaceholderCard title="Campaign Performance" icon={TrendingUp} delay={4}>
                <div className="mt-3 space-y-2">
                  <div className="text-2xl font-display font-semibold text-muted-foreground/30">—</div>
                  <div className="h-2 w-full rounded-full bg-muted/20" />
                </div>
              </PlaceholderCard>
              <PlaceholderCard title="Profitability" icon={DollarSign} delay={5}>
                <div className="mt-3 space-y-2">
                  <div className="text-2xl font-display font-semibold text-muted-foreground/30">—</div>
                  <div className="h-2 w-full rounded-full bg-muted/20" />
                </div>
              </PlaceholderCard>
              <PlaceholderCard title="Executive Alerts" icon={Bell} delay={6}>
                <div className="mt-3 space-y-2">
                  <div className="text-sm text-muted-foreground/40">No alerts</div>
                  <div className="h-2 w-3/4 rounded-full bg-muted/20" />
                </div>
              </PlaceholderCard>
            </div>
          </div>
        </div>

        {/* Right Column - 1/3 */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-xl border border-border/50 bg-card/50 p-5"
          >
            <h3 className="text-sm font-semibold mb-3">Quick Actions</h3>
            <div className="space-y-2">
              {[
                "New Brief",
                "Create Proposal",
                "Log Time",
                "Submit for Approval",
                "New Lead",
              ].map((action) => (
                <button
                  key={action}
                  className="w-full flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors text-left"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                  {action}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-xl border border-border/50 bg-card/50 p-5"
          >
            <h3 className="text-sm font-semibold mb-3">Recent Activity</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-muted/30 shrink-0" />
                  <div className="flex-1 space-y-1">
                    <div className="h-2.5 rounded-full bg-muted/30" style={{ width: `${60 + Math.random() * 30}%` }} />
                    <div className="h-2 w-16 rounded-full bg-muted/20" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/40 mt-4 text-center">No activity yet</p>
          </motion.div>

          {/* Upcoming Deadlines */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="rounded-xl border border-border/50 bg-card/50 p-5"
          >
            <h3 className="text-sm font-semibold mb-3">Upcoming Deadlines</h3>
            <div className="space-y-2.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg bg-muted/10 px-3 py-2.5">
                  <div className="h-8 w-8 rounded-md bg-muted/30 shrink-0" />
                  <div className="flex-1 space-y-1">
                    <div className="h-2.5 w-3/4 rounded-full bg-muted/30" />
                    <div className="h-2 w-12 rounded-full bg-muted/20" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/40 mt-3 text-center">No deadlines configured</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
