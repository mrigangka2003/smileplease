import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Heart, Users, Zap, CheckCircle, Calendar } from "lucide-react";

const team = [
  { name: "Dr. Sarah Mitchell", role: "Chief Dental Officer", specialty: "Orthodontics", initials: "SM", color: "bg-indigo-100 text-indigo-700" },
  { name: "Dr. James Chen", role: "Senior Surgeon", specialty: "Oral Surgery", initials: "JC", color: "bg-emerald-100 text-emerald-700" },
  { name: "Dr. Priya Sharma", role: "Lead Endodontist", specialty: "Root Canal Therapy", initials: "PS", color: "bg-rose-100 text-rose-700" },
  { name: "Dr. Robert Hill", role: "Periodontics Head", specialty: "Gum Disease", initials: "RH", color: "bg-amber-100 text-amber-700" },
  { name: "Dr. Lisa Wong", role: "Pediatric Dentist", specialty: "Children's Dentistry", initials: "LW", color: "bg-purple-100 text-purple-700" },
  { name: "Dr. Ahmed Khalid", role: "Implantologist", specialty: "Dental Implants", initials: "AK", color: "bg-sky-100 text-sky-700" },
];

const certifications = [
  "American Dental Association (ADA) Certified",
  "Joint Commission Accreditation",
  "ISO 9001:2015 Quality Management",
  "HIPAA Compliant Practice",
  "Board Certified Dental Specialists",
  "Digital Dentistry Excellence Award",
];

const values = [
  { icon: Heart, title: "Patient-First Care", desc: "Every decision we make puts the patient's wellbeing and comfort at the center." },
  { icon: Zap, title: "Innovation", desc: "We invest in the latest technology to deliver better outcomes and faster recovery." },
  { icon: Award, title: "Excellence", desc: "Our standards are set by the best in dental medicine, locally and globally." },
  { icon: Users, title: "Community", desc: "We believe healthy smiles build stronger communities. We give back through outreach." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 to-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Our Story & Mission
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            For over 15 years, Smile Please has been at the forefront of dental excellence, combining
            advanced technology with genuine human care to transform smiles and lives.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-3">Our History</Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Built on Trust, Grown Through Care
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Smile Please was founded in 2009 by Dr. Sarah Mitchell with a simple vision: make world-class
                dental care accessible and comfortable for everyone. What started as a small practice with two
                dentists has grown into a comprehensive dental center with 12 specialists serving over 8,500
                patients.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Over the years, we&apos;ve expanded our services, invested in cutting-edge technology, and built a
                team of passionate professionals who share our commitment to excellence. We were one of the
                first clinics in the region to adopt 3D imaging and digital smile design.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we continue to grow while staying true to our roots — treating every patient like
                family and every smile like a masterpiece.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-600 rounded-2xl p-6 text-white text-center">
                <div className="text-4xl font-bold mb-2">2009</div>
                <div className="text-indigo-100 text-sm">Year Founded</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 text-center border">
                <div className="text-4xl font-bold text-slate-900 mb-2">12</div>
                <div className="text-slate-500 text-sm">Specialist Dentists</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 text-center border">
                <div className="text-4xl font-bold text-slate-900 mb-2">8.5K+</div>
                <div className="text-slate-500 text-sm">Patients Served</div>
              </div>
              <div className="bg-emerald-600 rounded-2xl p-6 text-white text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-emerald-100 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Mission & Values</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Drives Us Every Day</h2>
          </div>
          <div className="bg-indigo-600 rounded-2xl p-8 text-white text-center mb-12">
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-indigo-100 max-w-2xl mx-auto text-lg">
              To deliver compassionate, high-quality dental care that improves the health, confidence,
              and lives of every patient we serve — one smile at a time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="text-center hover:shadow-md transition">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-sm">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Our Team</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Specialists</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="hover:shadow-lg transition">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-full ${member.color} flex items-center justify-center text-xl font-bold flex-shrink-0`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{member.name}</h3>
                    <p className="text-indigo-600 text-sm">{member.role}</p>
                    <p className="text-slate-400 text-xs mt-1">{member.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">Certifications</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Credentials</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center space-x-3 bg-white border rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Family</h2>
          <p className="text-indigo-100 mb-8">
            Experience dental care the way it should be — personal, professional, and pain-free.
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50" asChild>
            <Link href="/book-appointment">
              <Calendar className="w-5 h-5" />
              Book Your First Visit
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
