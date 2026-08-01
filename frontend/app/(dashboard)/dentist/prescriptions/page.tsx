"use client";
import { useState } from "react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, FileText } from "lucide-react";

interface Med { id: number; name: string; dosage: string; frequency: string; duration: string; }

export default function DentistPrescriptionsPage() {
  const [patient, setPatient] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [meds, setMeds] = useState<Med[]>([{ id: 1, name: "", dosage: "", frequency: "", duration: "" }]);

  const addMed = () => setMeds((prev) => [...prev, { id: Date.now(), name: "", dosage: "", frequency: "", duration: "" }]);
  const removeMed = (id: number) => setMeds((prev) => prev.filter((m) => m.id !== id));
  const updateMed = (id: number, field: keyof Med, val: string) =>
    setMeds((prev) => prev.map((m) => (m.id === id ? { ...m, [field]: val } : m)));

  return (
    <>
      <DashboardHeader title="Generate Prescription" />
      <div className="p-6 max-w-2xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              <span>New Prescription</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Patient *</label>
                <Input placeholder="Search patient..." value={patient} onChange={(e) => setPatient(e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Date</label>
                <Input type="date" defaultValue={new Date().toISOString().split("T")[0]} />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Diagnosis</label>
              <Input placeholder="e.g. Post Root Canal Pain" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-slate-700">Medications</label>
                <Button size="sm" variant="outline" onClick={addMed}>
                  <Plus className="w-3 h-3" />
                  Add Medicine
                </Button>
              </div>
              <div className="space-y-3">
                {meds.map((med) => (
                  <div key={med.id} className="grid grid-cols-12 gap-2 items-center p-3 bg-slate-50 rounded-xl">
                    <div className="col-span-4">
                      <Input placeholder="Medicine name" value={med.name} onChange={(e) => updateMed(med.id, "name", e.target.value)} />
                    </div>
                    <div className="col-span-2">
                      <Input placeholder="Dosage" value={med.dosage} onChange={(e) => updateMed(med.id, "dosage", e.target.value)} />
                    </div>
                    <div className="col-span-3">
                      <Input placeholder="Frequency" value={med.frequency} onChange={(e) => updateMed(med.id, "frequency", e.target.value)} />
                    </div>
                    <div className="col-span-2">
                      <Input placeholder="Duration" value={med.duration} onChange={(e) => updateMed(med.id, "duration", e.target.value)} />
                    </div>
                    <div className="col-span-1 text-right">
                      <button onClick={() => removeMed(med.id)} className="text-red-400 hover:text-red-600 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <Button className="flex-1">Generate & Save</Button>
              <Button variant="outline">Preview PDF</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
