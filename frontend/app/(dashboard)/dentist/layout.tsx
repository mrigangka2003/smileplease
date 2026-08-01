import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

const navItems = [
  { href: "/dentist/dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/dentist/schedule", label: "Daily Schedule", icon: "Calendar" },
  { href: "/dentist/patients", label: "Patients", icon: "Users" },
  { href: "/dentist/odontogram", label: "Odontogram", icon: "Stethoscope" },
  { href: "/dentist/treatment-notes", label: "Treatment Notes", icon: "ClipboardList" },
  { href: "/dentist/prescriptions", label: "Prescriptions", icon: "FileText" },
  { href: "/dentist/uploads", label: "Upload Files", icon: "Upload" },
  { href: "/dentist/messages", label: "Messages", icon: "MessageSquare" },
  { href: "/dentist/settings", label: "Settings", icon: "Settings" },
];

export default function DentistLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <DashboardSidebar
        items={navItems}
        role="dentist"
        userName="Dr. Sarah Mitchell"
        userInitials="SM"
      />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
