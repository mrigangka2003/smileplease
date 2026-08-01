import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function ReceptionSettingsPage() {
  return (
    <><DashboardHeader title="Settings" /><div className="p-6 max-w-xl"><Card><CardHeader><CardTitle className="text-base">Profile</CardTitle></CardHeader><CardContent className="space-y-4"><div><label className="text-sm font-medium text-slate-700 block mb-1">Name</label><Input defaultValue="Emma Lewis" /></div><div><label className="text-sm font-medium text-slate-700 block mb-1">Email</label><Input defaultValue="emma@dentalcare.com" /></div><Button>Save</Button></CardContent></Card></div></>
  );
}
