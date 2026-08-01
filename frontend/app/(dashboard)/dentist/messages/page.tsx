import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

export default function DentistMessagesPage() {
  return (
    <>
      <DashboardHeader title="Messages" />
      <div className="p-6">
        <Card>
          <CardContent className="p-16 text-center">
            <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-slate-500 font-medium">Messaging Center</h3>
            <p className="text-slate-400 text-sm mt-1">Patient-doctor secure messaging will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
