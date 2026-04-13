"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Inbox,
  Filter,
  Plus,
  Search,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Page Header ─────────────────────────────────────────
interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon?: LucideIcon;
  actions?: React.ReactNode;
}

export function PageHeader({ title, subtitle, icon: Icon, actions }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <div>
          <h1 className="text-2xl font-semibold tracking-tight font-display">{title}</h1>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      {actions && <div className="flex items-center gap-2 mt-3 sm:mt-0">{actions}</div>}
    </motion.div>
  );
}

// ─── Section Header ─────────────────────────────────────
interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeader({ title, description, action, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div>
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        {description && <p className="text-sm text-muted-foreground mt-0.5">{description}</p>}
      </div>
      {action}
    </div>
  );
}

// ─── Empty State ─────────────────────────────────────────
interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick?: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border/60 bg-card/30 p-12 text-center",
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted/50 mb-4">
        <Icon className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="text-base font-medium text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm">{description}</p>
      {action && (
        <Button variant="outline" size="sm" className="mt-4" onClick={action.onClick}>
          <Plus className="h-4 w-4 mr-1.5" />
          {action.label}
        </Button>
      )}
    </motion.div>
  );
}

// ─── Placeholder Card ────────────────────────────────────
interface PlaceholderCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
  delay?: number;
}

export function PlaceholderCard({
  title,
  description,
  icon: Icon,
  className,
  children,
  delay = 0,
}: PlaceholderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + delay * 0.05 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={cn(
        "group rounded-xl border border-border/50 bg-card/50 p-5 transition-colors hover:border-border hover:bg-card/70",
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5 text-primary/70 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
              <Icon className="h-4 w-4" />
            </div>
          )}
          <div>
            <h3 className="text-sm font-medium">{title}</h3>
            {description && (
              <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
            )}
          </div>
        </div>
      </div>
      {children || (
        <div className="space-y-2">
          <div className="h-2 w-3/4 rounded-full bg-muted/50" />
          <div className="h-2 w-1/2 rounded-full bg-muted/30" />
        </div>
      )}
    </motion.div>
  );
}

// ─── Status Pill ─────────────────────────────────────────
interface StatusPillProps {
  label: string;
  variant?: "default" | "success" | "warning" | "danger" | "info" | "gold";
  className?: string;
}

const pillVariants = {
  default: "bg-muted text-muted-foreground",
  success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  danger: "bg-red-500/10 text-red-400 border-red-500/20",
  info: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  gold: "bg-primary/10 text-primary border-primary/20",
};

export function StatusPill({ label, variant = "default", className }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        pillVariants[variant],
        className
      )}
    >
      {label}
    </span>
  );
}

// ─── Filter Bar ──────────────────────────────────────────
interface FilterBarProps {
  filters?: string[];
  className?: string;
}

export function FilterBar({ filters = ["All", "Active", "Pending", "Completed"], className }: FilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className={cn("flex items-center gap-2 flex-wrap", className)}
    >
      <div className="flex items-center gap-1.5 rounded-lg border border-border/50 bg-card/30 p-1">
        {filters.map((f, i) => (
          <button
            key={f}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              i === 0
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            {f}
          </button>
        ))}
      </div>
      <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
        <Filter className="h-3.5 w-3.5" />
        Filters
      </Button>
      <div className="relative ml-auto">
        <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search..."
          className="h-8 rounded-md border border-border/50 bg-card/30 pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 w-48"
        />
      </div>
    </motion.div>
  );
}

// ─── Table Shell ─────────────────────────────────────────
interface TableShellProps {
  columns: string[];
  rows?: number;
  className?: string;
}

export function TableShell({ columns, rows = 5, className }: TableShellProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={cn("rounded-xl border border-border/50 bg-card/30 overflow-hidden", className)}
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50 bg-muted/20">
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, i) => (
              <tr key={i} className="border-b border-border/30 last:border-0">
                {columns.map((col, j) => (
                  <td key={`${i}-${j}`} className="px-4 py-3.5">
                    <div
                      className="h-3 rounded-full bg-muted/30"
                      style={{ width: `${40 + Math.random() * 40}%` }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// ─── Stat Card ───────────────────────────────────────────
interface StatCardProps {
  label: string;
  value?: string;
  icon?: LucideIcon;
  trend?: string;
  className?: string;
  delay?: number;
}

export function StatCard({ label, value = "—", icon: Icon, trend, className, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 + delay * 0.06 }}
      className={cn(
        "rounded-xl border border-border/50 bg-card/50 p-4 transition-colors hover:border-border/80",
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</span>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground/50" />}
      </div>
      <div className="text-2xl font-semibold font-display tracking-tight">{value}</div>
      {trend && <p className="text-xs text-muted-foreground mt-1">{trend}</p>}
    </motion.div>
  );
}

// ─── Module Page Layout ──────────────────────────────────
interface ModulePageProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export function ModulePage({ title, subtitle, icon, children, actions }: ModulePageProps) {
  return (
    <div className="space-y-6">
      <PageHeader title={title} subtitle={subtitle} icon={icon} actions={actions} />
      {children}
    </div>
  );
}
