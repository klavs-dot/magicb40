"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hexagon, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-primary/3 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl gold-gradient shadow-lg shadow-primary/20 mx-auto mb-8"
        >
          <Hexagon className="h-8 w-8 text-background" strokeWidth={2} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-8xl font-display font-bold gold-text mb-4"
        >
          404
        </motion.h1>

        <h2 className="text-xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link href="/dashboard">
            <Button variant="gold" className="gap-2">
              <Home className="h-4 w-4" />
              Go to Dashboard
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </div>

        <p className="text-xs text-muted-foreground/40 mt-12">
          made by{" "}
          <a href="https://www.globalwm.lv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-primary transition-colors">
            www.globalwm.lv
          </a>
        </p>
      </motion.div>
    </div>
  );
}
