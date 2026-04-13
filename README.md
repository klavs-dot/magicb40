# MAGIC B40 — Operating System

Premium internal dashboard for the MAGIC B40 creative agency group. Built as a scalable foundation for managing operations, delivery, commercial, knowledge, resources, and executive oversight.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: lucide-react
- **Animation**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/klavs-dot/magicb40.git
cd magicb40

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import the `klavs-dot/magicb40` repository
4. Framework preset will auto-detect as **Next.js**
5. Click **Deploy**

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Redirect → /dashboard
│   ├── not-found.tsx             # 404 page
│   ├── login/                    # Login page
│   ├── forgot-password/          # Password reset page
│   └── dashboard/                # Dashboard (authenticated shell)
│       ├── layout.tsx            # Dashboard layout (sidebar + header)
│       ├── page.tsx              # Home dashboard
│       ├── brief-intake/         # Client & Brief Intake
│       ├── proposals/            # Proposal & Estimate Generator
│       ├── creative-pipeline/    # Creative Work Pipeline
│       ├── campaign-production/  # Campaign Production Control Center
│       ├── client-approvals/     # Client Approval Portal
│       ├── social-media/         # Social Media Content OS
│       ├── task-routing/         # Cross-B40 Task Routing Engine
│       ├── change-requests/      # Change Request Control
│       ├── contracts/            # Contracts / SOW / NDA Automation
│       ├── talent-vendors/       # Talent / Freelancer / Vendor Mgmt
│       ├── crm/                  # New Business CRM & Lead Scoring
│       ├── client-health/        # Client Health & Churn Alerts
│       ├── ai-brief/             # AI Brief Analysis Assistant
│       ├── case-studies/         # Case Study Generator
│       ├── awards/               # Awards / Submission Management
│       ├── knowledge-base/       # Knowledge Base & Best Practice
│       ├── resource-planning/    # Resource Planning Dashboard
│       ├── profitability/        # Profitability Dashboard
│       ├── kpi/                  # KPI / Performance Dashboard
│       ├── executive/            # CEO / Directors Cockpit
│       ├── settings/             # Settings (with sub-pages)
│       ├── profile/              # User profile
│       ├── notifications/        # Notifications
│       └── search/               # Global search
├── components/
│   ├── layout/                   # Shell components
│   │   ├── sidebar.tsx           # Navigation sidebar
│   │   ├── header.tsx            # Top header bar
│   │   ├── footer.tsx            # Footer
│   │   └── dashboard-shell.tsx   # Main layout wrapper
│   └── ui/                       # Reusable design system
│       ├── button.tsx            # Button component
│       ├── design-system.tsx     # PageHeader, EmptyState, Cards, etc.
│       ├── scroll-area.tsx       # Scroll area
│       ├── separator.tsx         # Separator
│       └── tooltip.tsx           # Tooltip
└── lib/
    ├── navigation.ts             # Nav config, departments, roles
    └── utils.ts                  # Utility functions (cn)
```

## Navigation Architecture

| Group              | Modules                                                  |
|--------------------|----------------------------------------------------------|
| Overview           | Home Dashboard                                           |
| Operations         | Brief Intake, Proposals, Creative Pipeline, Campaign Production, Client Approvals, Social Media OS |
| Delivery           | Task Routing, Change Requests, Contracts, Talent & Vendors |
| Commercial         | New Business CRM, Client Health                          |
| Knowledge & AI     | AI Brief Assistant, Case Studies, Awards, Knowledge Base |
| Resources & Finance| Resource Planning, Profitability, KPI Dashboard          |
| Executive          | CEO Cockpit                                              |

## Departments

- Account Management
- Strategy / WIT
- Creative / Magic
- Design / KiD
- Digital / Element
- Production / PLAY
- Project Management / Operations
- Sales / New Business
- Finance / Management
- Executive / Board

## Role Hierarchy

Specialist → Senior Specialist → Team Lead → Department Head → Operations Manager → Finance Manager → CEO / Executive

## Design System Components

All reusable components are in `src/components/ui/design-system.tsx`:

- **PageHeader** — consistent page titles with icons and actions
- **SectionHeader** — sub-section titles
- **EmptyState** — beautiful empty/placeholder states
- **PlaceholderCard** — animated card placeholders
- **StatCard** — KPI stat display cards
- **StatusPill** — colored status badges
- **FilterBar** — filter tab bars with search
- **TableShell** — skeleton table layouts
- **ModulePage** — standardized module page wrapper

## Implementing Modules

Each module page is self-contained in its route folder. To implement a module:

1. Navigate to `src/app/dashboard/[module-slug]/page.tsx`
2. Replace the `EmptyState` and `TableShell` with real components
3. Add API integrations as needed
4. Create sub-pages in the module folder if needed

The design system components can be reused across all modules for consistency.

## License

Private — MAGIC B40 Group

---

*made by [www.globalwm.lv](https://www.globalwm.lv)*
