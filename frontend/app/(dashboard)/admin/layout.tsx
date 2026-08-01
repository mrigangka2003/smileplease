import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/admin/analytics", label: "Analytics", icon: "BarChart3" },
  { href: "/admin/users", label: "User Management", icon: "Users" },
  { href: "/admin/inventory", label: "Inventory", icon: "Package" },
  { href: "/admin/suppliers", label: "Suppliers", icon: "Truck" },
  { href: "/admin/pricing", label: "Treatment Pricing", icon: "DollarSign" },
  { href: "/admin/reports", label: "Reports", icon: "FileText" },
  { href: "/admin/roles", label: "Roles & Permissions", icon: "ShieldCheck" },
  { href: "/admin/backup", label: "Backup", icon: "Database" },
  { href: "/admin/settings", label: "Settings", icon: "Settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <DashboardSidebar
        items={navItems}
        role="admin"
        userName="Admin User"
        userInitials="AU"
      />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
