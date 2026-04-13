"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hexagon, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-primary/3 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl gold-gradient shadow-lg shadow-primary/20 mb-4"
          >
            <Hexagon className="h-7 w-7 text-background" strokeWidth={2} />
          </motion.div>
          <h1 className="text-2xl font-display font-semibold tracking-tight">MAGIC <span className="text-primary">B40</span></h1>
          <p className="text-sm text-muted-foreground mt-1">Operating System</p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl p-8 shadow-2xl shadow-black/20">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Welcome back</h2>
            <p className="text-sm text-muted-foreground mt-1">Sign in to your account to continue</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-1.5 h-11 w-full rounded-lg border border-border/50 bg-background/50 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Password</label>
                <Link href="/forgot-password" className="text-xs text-primary/70 hover:text-primary transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative mt-1.5">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-11 w-full rounded-lg border border-border/50 bg-background/50 px-4 pr-10 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-border bg-background accent-primary"
              />
              <label htmlFor="remember" className="text-xs text-muted-foreground">Remember me for 30 days</label>
            </div>

            <Link href="/dashboard">
              <Button variant="gold" className="w-full h-11 mt-2 gap-2">
                Sign In
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground/40 mt-8">
          made by{" "}
          <a href="https://www.globalwm.lv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-primary transition-colors">
            www.globalwm.lv
          </a>
        </p>
      </motion.div>
    </div>
  );
}
