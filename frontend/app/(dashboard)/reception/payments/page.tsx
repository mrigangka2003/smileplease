import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const payments = [
  { id: "PAY-001", patient: "John Doe", amount: 150, method: "Card", date: "Aug 1, 2026", invoice: "INV-2026-001", status: "Completed" },
  { id: "PAY-002", patient: "Sarah Connor", amount: 90, method: "Cash", date: "Jul 15, 2026", invoice: "INV-2026-002", status: "Completed" },
  { id: "PAY-003", patient: "David Park", amount: 200, method: "UPI", date: "Jun 20, 2026", invoice: "INV-2026-003", status: "Completed" },
  { id: "PAY-004", patient: "Mia Wang", amount: 650, method: "Insurance", date: "Jun 10, 2026", invoice: "INV-2026-004", status: "Pending" },
  { id: "PAY-005", patient: "Tom Miller", amount: 120, method: "Card", date: "May 30, 2026", invoice: "INV-2026-005", status: "Refunded" },
];

export default function PaymentsPage() {
  return (
    <>
      <DashboardHeader title="Payments" subtitle="View and manage all payment records" />
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card><CardContent className="p-4 text-center"><div className="text-2xl font-bold text-emerald-600">$1,210</div><div className="text-xs text-slate-500">Collected This Week</div></CardContent></Card>
          <Card><CardContent className="p-4 text-center"><div className="text-2xl font-bold text-amber-600">$650</div><div className="text-xs text-slate-500">Pending</div></CardContent></Card>
          <Card><CardContent className="p-4 text-center"><div className="text-2xl font-bold text-slate-700">$120</div><div className="text-xs text-slate-500">Refunded</div></CardContent></Card>
        </div>
        <Card>
          <CardHeader><CardTitle className="text-base">Payment History</CardTitle></CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Payment ID</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Patient</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Invoice</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Amount</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Method</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Date</th>
                    <th className="text-center py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Status</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {payments.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-mono text-xs text-slate-500">{p.id}</td>
                      <td className="py-3 px-4 font-medium text-slate-900">{p.patient}</td>
                      <td className="py-3 px-4 text-slate-500 text-xs">{p.invoice}</td>
                      <td className="py-3 px-4 text-right font-bold text-slate-900">${p.amount}</td>
                      <td className="py-3 px-4"><Badge variant="secondary">{p.method}</Badge></td>
                      <td className="py-3 px-4 text-slate-500 text-xs">{p.date}</td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant={p.status === "Completed" ? "success" : p.status === "Refunded" ? "destructive" : "warning"}>{p.status}</Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button size="sm" variant="ghost"><Download className="w-4 h-4" /></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
