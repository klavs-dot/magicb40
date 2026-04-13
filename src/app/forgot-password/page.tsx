"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hexagon, ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl gold-gradient shadow-lg shadow-primary/20 mb-4">
            <Hexagon className="h-7 w-7 text-background" strokeWidth={2} />
          </div>
          <h1 className="text-2xl font-display font-semibold tracking-tight">MAGIC <span className="text-primary">B40</span></h1>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl p-8 shadow-2xl shadow-black/20">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-5">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-lg font-semibold">Reset your password</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-6">Enter your email and we&apos;ll send you a reset link</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-1.5 h-11 w-full rounded-lg border border-border/50 bg-background/50 px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
            <Button variant="gold" className="w-full h-11">
              Send Reset Link
            </Button>
          </form>

          <Link
            href="/login"
            className="flex items-center justify-center gap-1.5 mt-5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>
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
