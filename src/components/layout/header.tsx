"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { departments, roles, type Department, type Role } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import {
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  Menu,
  User,
  LogOut,
  Settings,
  Building2,
  Shield,
  Moon,
} from "lucide-react";

interface HeaderProps {
  sidebarCollapsed: boolean;
  onMenuToggle: () => void;
}

export function Header({ sidebarCollapsed, onMenuToggle }: HeaderProps) {
  const pathname = usePathname();
  const [searchFocused, setSearchFocused] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showDeptSwitcher, setShowDeptSwitcher] = useState(false);
  const [currentDept, setCurrentDept] = useState<Department>("All Departments");
  const [currentRole, setCurrentRole] = useState<Role>("All Roles");

  // Generate breadcrumbs from path
  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
    return { label, href };
  });

  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/30 bg-background/80 backdrop-blur-xl px-6 transition-all duration-300",
        sidebarCollapsed ? "ml-[72px]" : "ml-[260px]"
      )}
    >
      {/* Left: breadcrumb + dept switcher */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50"
        >
          <Menu className="h-4 w-4" />
        </button>

        {/* Breadcrumbs */}
        <nav className="hidden sm:flex items-center gap-1 text-sm">
          {breadcrumbs.map((crumb, i) => (
            <React.Fragment key={crumb.href}>
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/40" />}
              <Link
                href={crumb.href}
                className={cn(
                  "transition-colors",
                  i === breadcrumbs.length - 1
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {crumb.label}
              </Link>
            </React.Fragment>
          ))}
        </nav>

        {/* Department/Role Switcher */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setShowDeptSwitcher(!showDeptSwitcher)}
            className="flex items-center gap-1.5 rounded-lg border border-border/50 bg-card/30 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:border-border transition-colors"
          >
            <Building2 className="h-3.5 w-3.5" />
            <span>{currentDept === "All Departments" ? "All Depts" : currentDept}</span>
            <ChevronDown className="h-3 w-3" />
          </button>
          <AnimatePresence>
            {showDeptSwitcher && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowDeptSwitcher(false)} />
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute top-full mt-2 left-0 z-50 w-64 rounded-xl border border-border/60 bg-card/95 backdrop-blur-xl p-3 shadow-xl"
                >
                  <div className="mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">Department</span>
                  </div>
                  <div className="space-y-0.5 mb-3">
                    {departments.map((dept) => (
                      <button
                        key={dept}
                        onClick={() => { setCurrentDept(dept); setShowDeptSwitcher(false); }}
                        className={cn(
                          "w-full text-left rounded-md px-2.5 py-1.5 text-xs transition-colors",
                          currentDept === dept
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                        )}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                  <div className="border-t border-border/30 pt-2 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">Role View</span>
                  </div>
                  <div className="space-y-0.5">
                    {roles.map((role) => (
                      <button
                        key={role}
                        onClick={() => { setCurrentRole(role); setShowDeptSwitcher(false); }}
                        className={cn(
                          "w-full text-left rounded-md px-2.5 py-1.5 text-xs transition-colors",
                          currentRole === role
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                        )}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right: search, notifications, user */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative">
          <motion.div
            animate={{ width: searchFocused ? 280 : 200 }}
            transition={{ duration: 0.2 }}
            className="relative hidden sm:block"
          >
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search anything... ⌘K"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="h-9 w-full rounded-lg border border-border/50 bg-card/30 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </motion.div>
        </div>

        {/* Notifications */}
        <Link href="/dashboard/notifications">
          <Button variant="ghost" size="icon" className="relative h-9 w-9 text-muted-foreground hover:text-foreground">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary animate-pulse-subtle" />
          </Button>
        </Link>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-muted/40"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 text-primary text-xs font-semibold">
              B4
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-xs font-medium">Admin User</p>
              <p className="text-[10px] text-muted-foreground">CEO / Executive</p>
            </div>
            <ChevronDown className="hidden lg:block h-3 w-3 text-muted-foreground" />
          </button>

          <AnimatePresence>
            {showUserMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.98 }}
                  className="absolute right-0 top-full mt-2 z-50 w-56 rounded-xl border border-border/60 bg-card/95 backdrop-blur-xl p-1.5 shadow-xl"
                >
                  <div className="px-3 py-2 mb-1">
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-muted-foreground">admin@b40.group</p>
                  </div>
                  <div className="h-px bg-border/30 mx-1 mb-1" />
                  {[
                    { icon: User, label: "Profile", href: "/dashboard/profile" },
                    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
                    { icon: Shield, label: "Permissions", href: "/dashboard/settings/permissions" },
                    { icon: Moon, label: "Appearance", href: "/dashboard/settings" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  ))}
                  <div className="h-px bg-border/30 mx-1 my-1" />
                  <Link
                    href="/login"
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-red-400/80 hover:text-red-400 hover:bg-red-500/5 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Link>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
