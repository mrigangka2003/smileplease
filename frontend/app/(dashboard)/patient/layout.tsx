import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

const navItems = [
  { href: "/patient/dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/patient/appointments", label: "Appointments", icon: "Calendar" },
  { href: "/patient/medical-history", label: "Medical History", icon: "FileText" },
  { href: "/patient/treatment-plan", label: "Treatment Plan", icon: "ClipboardList" },
  { href: "/patient/invoices", label: "Invoices", icon: "Receipt" },
  { href: "/patient/prescriptions", label: "Prescriptions", icon: "FileText" },
  { href: "/patient/messages", label: "Messages", icon: "MessageSquare" },
  { href: "/patient/notifications", label: "Notifications", icon: "Bell" },
  { href: "/patient/settings", label: "Settings", icon: "Settings" },
];

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <DashboardSidebar
        items={navItems}
        role="patient"
        userName="John Doe"
        userInitials="JD"
      />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
