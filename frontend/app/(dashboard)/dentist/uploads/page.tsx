import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Upload, File, Image, Eye, Trash2 } from "lucide-react";

const files = [
  { name: "JohnDoe_Panoramic_Jul2026.jpg", type: "X-Ray", patient: "John Doe", date: "Jul 15, 2026", size: "2.4 MB" },
  { name: "SarahConnor_CT_Jun2026.dcm", type: "CT Scan", patient: "Sarah Connor", date: "Jun 20, 2026", size: "18.7 MB" },
  { name: "TomMiller_Bitewing_May2026.jpg", type: "X-Ray", patient: "Tom Miller", date: "May 10, 2026", size: "1.1 MB" },
  { name: "ElenaRoss_Photo_Jul2026.jpg", type: "Photo", patient: "Elena Ross", date: "Jul 20, 2026", size: "3.2 MB" },
];

export default function UploadsPage() {
  return (
    <>
      <DashboardHeader title="Upload Files" subtitle="Manage X-rays, CT scans, and images" />
      <div className="p-6 space-y-6">
        {/* Upload Zone */}
        <div className="border-2 border-dashed border-indigo-300 rounded-2xl p-10 text-center bg-indigo-50 hover:bg-indigo-100 transition cursor-pointer">
          <Upload className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
          <p className="font-semibold text-slate-800">Drop files here or click to upload</p>
          <p className="text-slate-500 text-sm mt-1">Supports X-Ray (JPEG, PNG, DICOM), CT Scans, PDFs</p>
          <Button className="mt-4" size="sm">Browse Files</Button>
        </div>

        {/* Uploaded Files */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Uploaded Files</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {files.map((file) => (
                <div key={file.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      {file.type === "Photo" ? (
                        <Image className="w-5 h-5 text-indigo-600" />
                      ) : (
                        <File className="w-5 h-5 text-indigo-600" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{file.name}</p>
                      <p className="text-xs text-slate-400">{file.patient} · {file.date} · {file.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="info">{file.type}</Badge>
                    <Button size="sm" variant="ghost"><Eye className="w-4 h-4" /></Button>
                    <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
