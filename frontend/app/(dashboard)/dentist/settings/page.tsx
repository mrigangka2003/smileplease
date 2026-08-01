import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DentistSettingsPage() {
  return (
    <>
      <DashboardHeader title="Settings" />
      <div className="p-6 max-w-xl space-y-4">
        <Card>
          <CardHeader><CardTitle className="text-base">Profile Settings</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div><label className="text-sm font-medium text-slate-700 block mb-1">Full Name</label><Input defaultValue="Dr. Sarah Mitchell" /></div>
            <div><label className="text-sm font-medium text-slate-700 block mb-1">Specialty</label><Input defaultValue="Orthodontist" /></div>
            <div><label className="text-sm font-medium text-slate-700 block mb-1">Email</label><Input defaultValue="sarah@dentalcare.com" /></div>
            <Button>Save</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
