import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent } from "@/components/ui/card";
import { Bell } from "lucide-react";
export default function ReceptionNotificationsPage() {
  return (
    <><DashboardHeader title="Notifications" /><div className="p-6"><Card><CardContent className="p-16 text-center"><Bell className="w-12 h-12 text-slate-300 mx-auto mb-4" /><p className="text-slate-400">No new notifications.</p></CardContent></Card></div></>
  );
}
