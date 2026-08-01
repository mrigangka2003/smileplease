import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Phone, Mail } from "lucide-react";

const suppliers = [
  { name: "MedSupply Co.", category: "PPE & General", contact: "john@medsupply.com", phone: "+1 555-2001", status: "Active" },
  { name: "Dental Depot", category: "Materials", contact: "sales@dentaldepot.com", phone: "+1 555-2002", status: "Active" },
  { name: "DentTools", category: "Instruments", contact: "orders@denttools.com", phone: "+1 555-2003", status: "Active" },
  { name: "LabPro", category: "Prosthetics", contact: "lab@labpro.com", phone: "+1 555-2004", status: "Inactive" },
];

export default function SuppliersPage() {
  return (
    <><DashboardHeader title="Supplier Management" />
    <div className="p-6 space-y-4">
      <div className="flex justify-end"><Button><Plus className="w-4 h-4" />Add Supplier</Button></div>
      <Card><CardContent className="divide-y">
        {suppliers.map((s) => (
          <div key={s.name} className="py-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-900">{s.name}</p>
              <p className="text-sm text-slate-500">{s.category}</p>
              <div className="flex space-x-4 mt-1 text-xs text-slate-400">
                <span className="flex items-center space-x-1"><Mail className="w-3 h-3" /><span>{s.contact}</span></span>
                <span className="flex items-center space-x-1"><Phone className="w-3 h-3" /><span>{s.phone}</span></span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant={s.status === "Active" ? "success" : "secondary"}>{s.status}</Badge>
              <Button size="sm" variant="outline">Edit</Button>
              <Button size="sm">Order</Button>
            </div>
          </div>
        ))}
      </CardContent></Card>
    </div></>
  );
}
