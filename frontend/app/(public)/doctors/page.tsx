import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Calendar, Award } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Orthodontist",
    experience: "12 years",
    rating: 4.9,
    reviews: 312,
    initials: "SM",
    color: "bg-indigo-100 text-indigo-700",
    education: "DMD, Harvard School of Dental Medicine",
    availability: "Mon, Wed, Fri",
    services: ["Braces", "Clear Aligners", "Retainers", "Bite Correction"],
    bio: "Dr. Mitchell specializes in creating beautiful, functional smiles using the latest orthodontic techniques. Her patient-centered approach ensures comfortable treatment for all ages.",
  },
  {
    name: "Dr. James Chen",
    specialty: "Oral Surgeon",
    experience: "15 years",
    rating: 4.8,
    reviews: 287,
    initials: "JC",
    color: "bg-emerald-100 text-emerald-700",
    education: "DDS, UCLA School of Dentistry",
    availability: "Tue, Thu, Sat",
    services: ["Wisdom Tooth Extraction", "Jaw Surgery", "Implants", "Biopsies"],
    bio: "Dr. Chen brings 15 years of surgical expertise to complex oral procedures. He is known for his precision and compassionate post-operative care.",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Endodontist",
    experience: "10 years",
    rating: 4.9,
    reviews: 198,
    initials: "PS",
    color: "bg-rose-100 text-rose-700",
    education: "BDS, MDS – King's College London",
    availability: "Mon, Tue, Thu",
    services: ["Root Canal", "Pulp Therapy", "Endodontic Retreatment", "Apicoectomy"],
    bio: "Dr. Sharma is passionate about saving natural teeth. Her gentle technique and use of rotary endodontics make root canals virtually pain-free.",
  },
  {
    name: "Dr. Robert Hill",
    specialty: "Periodontist",
    experience: "18 years",
    rating: 4.7,
    reviews: 256,
    initials: "RH",
    color: "bg-amber-100 text-amber-700",
    education: "DDS, University of Michigan",
    availability: "Mon, Wed, Fri",
    services: ["Gum Disease Treatment", "Gum Grafting", "Dental Implants", "Crown Lengthening"],
    bio: "Dr. Hill has dedicated his career to gum health and implant dentistry. His expertise in periodontal surgery has helped hundreds of patients restore their smile.",
  },
  {
    name: "Dr. Lisa Wong",
    specialty: "Pediatric Dentist",
    experience: "8 years",
    rating: 5.0,
    reviews: 421,
    initials: "LW",
    color: "bg-purple-100 text-purple-700",
    education: "DMD, University of Pennsylvania",
    availability: "Mon–Fri",
    services: ["Child Checkups", "Sealants", "Fluoride Treatments", "Space Maintainers"],
    bio: "Dr. Wong creates a fun, fear-free environment for children. Her warmth and patience make her the favourite dentist for kids in the clinic.",
  },
  {
    name: "Dr. Ahmed Khalid",
    specialty: "Implantologist",
    experience: "14 years",
    rating: 4.8,
    reviews: 174,
    initials: "AK",
    color: "bg-sky-100 text-sky-700",
    education: "BDS, Cairo University; Fellowship, Straumann Institute",
    availability: "Tue, Thu, Sat",
    services: ["Single Implants", "Full Arch Implants", "Bone Grafting", "Sinus Lifts"],
    bio: "Dr. Khalid is a renowned implantologist with international training. He specialises in full-arch restorations and complex bone reconstruction cases.",
  },
];

export default function DoctorsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 to-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">Our Doctors</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Meet Our Expert Dental Team
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Board-certified specialists committed to delivering exceptional dental care with
            compassion and expertise.
          </p>
        </div>
      </section>

      {/* Doctor Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {doctors.map((doc) => (
              <Card key={doc.name} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className={`w-20 h-20 rounded-2xl ${doc.color} flex items-center justify-center text-2xl font-bold flex-shrink-0`}
                    >
                      {doc.initials}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                      <p className="text-indigo-600 font-medium">{doc.specialty}</p>
                      <p className="text-slate-400 text-sm mt-1">{doc.education}</p>
                      <div className="flex items-center space-x-3 mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                          <span className="text-sm font-semibold text-slate-700">{doc.rating}</span>
                          <span className="text-slate-400 text-xs">({doc.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-1 text-slate-500 text-sm">
                          <Award className="w-4 h-4" />
                          <span>{doc.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{doc.bio}</p>

                  {/* Services */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {doc.services.map((s) => (
                        <Badge key={s} variant="secondary" className="text-xs">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center space-x-2 mb-4 text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-indigo-500" />
                    <span>Available: {doc.availability}</span>
                  </div>

                  <Button className="w-full" asChild>
                    <Link href="/book-appointment">
                      <Calendar className="w-4 h-4" />
                      Book with {doc.name.split(" ")[1]}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
