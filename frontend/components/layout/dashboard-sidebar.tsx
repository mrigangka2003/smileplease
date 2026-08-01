"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LogOut,
  ChevronLeft,
  Menu,
  LayoutDashboard,
  BarChart3,
  Users,
  Package,
  DollarSign,
  FileText,
  ShieldCheck,
  Settings,
  Database,
  Truck,
  Calendar,
  Stethoscope,
  ClipboardList,
  Upload,
  MessageSquare,
  UserPlus,
  Receipt,
  CreditCard,
  Bell,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  BarChart3,
  Users,
  Package,
  DollarSign,
  FileText,
  ShieldCheck,
  Settings,
  Database,
  Truck,
  Calendar,
  Stethoscope,
  ClipboardList,
  Upload,
  MessageSquare,
  UserPlus,
  Receipt,
  CreditCard,
  Bell,
};

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

interface DashboardSidebarProps {
  items: NavItem[];
  role: string;
  userName: string;
  userInitials: string;
}

export function DashboardSidebar({ items, role, userName, userInitials }: DashboardSidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "flex flex-col bg-slate-900 text-white transition-all duration-300 h-screen sticky top-0",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        {!collapsed && (
          <div className="flex items-center space-x-2 px-2">
            <div className="w-8 h-8 rounded-lg bg-[#5287f3] flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="font-bold text-sm">Smile Please</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-slate-800 transition ml-auto"
        >
          {collapsed ? <Menu className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* User Info */}
      {!collapsed && (
        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
              {userInitials}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold truncate">{userName}</div>
              <div className="text-xs text-slate-400 capitalize">{role}</div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {items.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-all",
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-slate-800">
        <Link
          href="/login"
          className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-white transition"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span>Logout</span>}
        </Link>
      </div>
    </aside>
  );
}
