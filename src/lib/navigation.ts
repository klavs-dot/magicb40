import {
  LayoutDashboard,
  FileText,
  Calculator,
  Palette,
  Clapperboard,
  CheckSquare,
  Share2,
  GitBranch,
  RefreshCcw,
  FileSignature,
  Users,
  Target,
  HeartPulse,
  Brain,
  BookOpen,
  Award,
  Search,
  CalendarRange,
  PieChart,
  BarChart3,
  Crown,
  Settings,
  Bell,
  User,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
  badge?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navigation: NavGroup[] = [
  {
    label: "Overview",
    items: [
      {
        title: "Home Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
        description: "Role-based overview & insights",
      },
    ],
  },
  {
    label: "Operations",
    items: [
      {
        title: "Client & Brief Intake",
        href: "/dashboard/brief-intake",
        icon: FileText,
        description: "New client onboarding & briefs",
      },
      {
        title: "Proposal & Estimates",
        href: "/dashboard/proposals",
        icon: Calculator,
        description: "Generate proposals & estimates",
      },
      {
        title: "Creative Pipeline",
        href: "/dashboard/creative-pipeline",
        icon: Palette,
        description: "Creative work management",
      },
      {
        title: "Campaign Production",
        href: "/dashboard/campaign-production",
        icon: Clapperboard,
        description: "Production control center",
      },
      {
        title: "Client Approvals",
        href: "/dashboard/client-approvals",
        icon: CheckSquare,
        description: "Approval portal & workflows",
      },
      {
        title: "Social Media OS",
        href: "/dashboard/social-media",
        icon: Share2,
        description: "Content planning & publishing",
      },
    ],
  },
  {
    label: "Delivery",
    items: [
      {
        title: "Task Routing Engine",
        href: "/dashboard/task-routing",
        icon: GitBranch,
        description: "Cross-B40 task distribution",
      },
      {
        title: "Change Requests",
        href: "/dashboard/change-requests",
        icon: RefreshCcw,
        description: "Change request control",
      },
      {
        title: "Contracts & SOW",
        href: "/dashboard/contracts",
        icon: FileSignature,
        description: "Contracts, SOW & NDA automation",
      },
      {
        title: "Talent & Vendors",
        href: "/dashboard/talent-vendors",
        icon: Users,
        description: "Freelancer & vendor management",
      },
    ],
  },
  {
    label: "Commercial",
    items: [
      {
        title: "New Business CRM",
        href: "/dashboard/crm",
        icon: Target,
        description: "Lead scoring & pipeline",
      },
      {
        title: "Client Health",
        href: "/dashboard/client-health",
        icon: HeartPulse,
        description: "Health scores & churn alerts",
      },
    ],
  },
  {
    label: "Knowledge & AI",
    items: [
      {
        title: "AI Brief Assistant",
        href: "/dashboard/ai-brief",
        icon: Brain,
        description: "AI-powered brief analysis",
      },
      {
        title: "Case Studies",
        href: "/dashboard/case-studies",
        icon: BookOpen,
        description: "Post-campaign case generator",
      },
      {
        title: "Awards Management",
        href: "/dashboard/awards",
        icon: Award,
        description: "Award submissions & tracking",
      },
      {
        title: "Knowledge Base",
        href: "/dashboard/knowledge-base",
        icon: Search,
        description: "Best practices & search",
      },
    ],
  },
  {
    label: "Resources & Finance",
    items: [
      {
        title: "Resource Planning",
        href: "/dashboard/resource-planning",
        icon: CalendarRange,
        description: "Team capacity & allocation",
      },
      {
        title: "Profitability",
        href: "/dashboard/profitability",
        icon: PieChart,
        description: "Client & project profitability",
      },
      {
        title: "KPI Dashboard",
        href: "/dashboard/kpi",
        icon: BarChart3,
        description: "Performance executive dashboard",
      },
    ],
  },
  {
    label: "Executive",
    items: [
      {
        title: "CEO Cockpit",
        href: "/dashboard/executive",
        icon: Crown,
        description: "Directors executive overview",
      },
    ],
  },
];

export const utilityNavItems: NavItem[] = [
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
];

export const departments = [
  "All Departments",
  "Account Management",
  "Strategy / WIT",
  "Creative / Magic",
  "Design / KiD",
  "Digital / Element",
  "Production / PLAY",
  "Project Management / Ops",
  "Sales / New Business",
  "Finance / Management",
  "Executive / Board",
] as const;

export type Department = (typeof departments)[number];

export const roles = [
  "All Roles",
  "Specialist",
  "Senior Specialist",
  "Team Lead",
  "Department Head",
  "Operations Manager",
  "Finance Manager",
  "CEO / Executive",
] as const;

export type Role = (typeof roles)[number];
