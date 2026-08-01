import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

const navItems = [
  { href: "/reception/dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/reception/calendar", label: "Appointment Calendar", icon: "Calendar" },
  { href: "/reception/register", label: "Register Patient", icon: "UserPlus" },
  { href: "/reception/checkin", label: "Check-in / Queue", icon: "ClipboardList" },
  { href: "/reception/billing", label: "Billing", icon: "Receipt" },
  { href: "/reception/payments", label: "Payments", icon: "CreditCard" },
  { href: "/reception/patients", label: "Patients", icon: "Users" },
  { href: "/reception/notifications", label: "Notifications", icon: "Bell" },
  { href: "/reception/settings", label: "Settings", icon: "Settings" },
];

export default function ReceptionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <DashboardSidebar
        items={navItems}
        role="receptionist"
        userName="Emma Lewis"
        userInitials="EL"
      />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
