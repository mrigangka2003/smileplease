"use client";
import { useState } from "react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, Plus } from "lucide-react";

const existingNotes = [
  {
    patient: "John Doe",
    date: "Jul 15, 2026",
    tooth: "36",
    diagnosis: "Deep cavity with pulp involvement",
    treatment: "RCT recommended. Temporary filling completed.",
    status: "In Progress",
  },
  {
    patient: "Sarah Connor",
    date: "Jul 10, 2026",
    tooth: "11",
    diagnosis: "Mild crowding, Class I malocclusion",
    treatment: "Braces adjustment. Wire changed to 0.019×0.025.",
    status: "Completed",
  },
];

export default function TreatmentNotesPage() {
  const [newNote, setNewNote] = useState({ patient: "", tooth: "", diagnosis: "", treatment: "" });

  return (
    <>
      <DashboardHeader title="Treatment Notes" />
      <div className="p-6 space-y-6">
        {/* Add Note */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <Plus className="w-5 h-5 text-indigo-600" />
              <span>New Treatment Note</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Patient Name</label>
                <Input placeholder="Search patient..." value={newNote.patient} onChange={(e) => setNewNote((p) => ({ ...p, patient: e.target.value }))} />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Tooth Number (FDI)</label>
                <Input placeholder="e.g. 36" value={newNote.tooth} onChange={(e) => setNewNote((p) => ({ ...p, tooth: e.target.value }))} />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Diagnosis</label>
              <textarea
                className="flex min-h-[80px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 resize-none"
                placeholder="Clinical findings and diagnosis..."
                value={newNote.diagnosis}
                onChange={(e) => setNewNote((p) => ({ ...p, diagnosis: e.target.value }))}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Treatment Performed / Plan</label>
              <textarea
                className="flex min-h-[80px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 resize-none"
                placeholder="Treatment completed and next steps..."
                value={newNote.treatment}
                onChange={(e) => setNewNote((p) => ({ ...p, treatment: e.target.value }))}
              />
            </div>
            <Button>
              <Save className="w-4 h-4" />
              Save Note
            </Button>
          </CardContent>
        </Card>

        {/* Past Notes */}
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900">Recent Notes</h3>
          {existingNotes.map((note, i) => (
            <Card key={i}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-slate-900">{note.patient}</h4>
                    <p className="text-xs text-slate-400">{note.date} · Tooth {note.tooth}</p>
                  </div>
                  <Badge variant={note.status === "Completed" ? "success" : "info"}>{note.status}</Badge>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase">Diagnosis: </span>
                    <span className="text-sm text-slate-700">{note.diagnosis}</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase">Treatment: </span>
                    <span className="text-sm text-slate-700">{note.treatment}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
