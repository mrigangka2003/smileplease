import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Download, RefreshCw } from "lucide-react";

const backups = [
  { name: "backup_2026_08_01_00_00.sql", size: "42 MB", date: "Aug 1, 2026 00:00", status: "Success" },
  { name: "backup_2026_07_25_00_00.sql", size: "41 MB", date: "Jul 25, 2026 00:00", status: "Success" },
  { name: "backup_2026_07_18_00_00.sql", size: "40 MB", date: "Jul 18, 2026 00:00", status: "Success" },
];

export default function BackupPage() {
  return (
    <><DashboardHeader title="Database Backup" />
    <div className="p-6 space-y-6 max-w-2xl">
      <Card>
        <CardHeader><CardTitle className="text-base flex items-center space-x-2"><Database className="w-5 h-5 text-indigo-600" /><span>Backup Management</span></CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
            <p className="font-medium text-emerald-800 text-sm">Last backup: Aug 1, 2026 at 00:00 AM</p>
            <p className="text-emerald-700 text-xs">Automatic daily backups are enabled.</p>
          </div>
          <div className="flex gap-3">
            <Button className="flex-1"><Database className="w-4 h-4" />Create Backup Now</Button>
            <Button variant="outline"><RefreshCw className="w-4 h-4" />Restore</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle className="text-base">Backup History</CardTitle></CardHeader>
        <CardContent className="divide-y">
          {backups.map((b) => (
            <div key={b.name} className="py-3 flex items-center justify-between">
              <div><p className="text-sm font-medium text-slate-800">{b.name}</p><p className="text-xs text-slate-400">{b.date} · {b.size}</p></div>
              <div className="flex items-center space-x-2">
                <Badge variant="success">{b.status}</Badge>
                <Button size="sm" variant="ghost"><Download className="w-4 h-4" /></Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div></>
  );
}
