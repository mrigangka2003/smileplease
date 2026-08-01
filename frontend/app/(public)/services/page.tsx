import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Clock, DollarSign, ChevronRight } from "lucide-react";

const services = [
  {
    id: "general-dentistry",
    icon: "🦷",
    title: "General Dentistry",
    description: "Comprehensive oral health care including checkups, cleanings, and preventive treatments to maintain your dental health.",
    procedure: "Examination, X-rays, professional cleaning, fluoride treatment, and personalized oral hygiene guidance.",
    duration: "60-90 minutes",
    price: "From $80",
    faqs: [
      { q: "How often should I get a checkup?", a: "Every 6 months is recommended for most patients." },
      { q: "Does cleaning hurt?", a: "Professional cleaning is generally comfortable with minimal sensitivity." },
    ],
  },
  {
    id: "teeth-cleaning",
    icon: "✨",
    title: "Teeth Cleaning",
    description: "Professional dental cleaning to remove plaque, tartar, and surface stains for a healthier, brighter smile.",
    procedure: "Scaling, polishing, and fluoride application by a certified dental hygienist.",
    duration: "45-60 minutes",
    price: "From $100",
    faqs: [
      { q: "Is cleaning different from whitening?", a: "Yes, cleaning removes buildup while whitening changes the tooth color." },
    ],
  },
  {
    id: "root-canal",
    icon: "🔬",
    title: "Root Canal",
    description: "Save an infected tooth with our comfortable, modern root canal procedures using advanced anesthesia.",
    procedure: "Removal of infected pulp, canal cleaning, shaping, filling, and crown placement.",
    duration: "1-2 hours",
    price: "From $600",
    faqs: [
      { q: "Is it painful?", a: "Modern root canals are no more uncomfortable than getting a filling." },
      { q: "How many visits needed?", a: "Typically 1-2 visits depending on complexity." },
    ],
  },
  {
    id: "dental-implants",
    icon: "🏥",
    title: "Dental Implants",
    description: "Permanent, natural-looking replacement for missing teeth using titanium implants that fuse with your jawbone.",
    procedure: "Implant placement, osseointegration period, abutment attachment, and crown fitting.",
    duration: "3-6 months total",
    price: "From $2,000",
    faqs: [
      { q: "How long do implants last?", a: "With proper care, implants can last a lifetime." },
    ],
  },
  {
    id: "orthodontics",
    icon: "😁",
    title: "Orthodontics",
    description: "Straighten teeth and correct bite issues with traditional braces or clear aligner systems.",
    procedure: "Assessment, treatment planning, brace/aligner fitting, regular adjustments, and retention phase.",
    duration: "12-24 months",
    price: "From $3,500",
    faqs: [
      { q: "Clear aligners vs traditional braces?", a: "Both are effective. Aligners offer aesthetics, braces may suit complex cases better." },
    ],
  },
  {
    id: "veneers",
    icon: "💎",
    title: "Veneers",
    description: "Thin porcelain shells bonded to the front of teeth to improve shape, color, and appearance.",
    procedure: "Consultation, tooth preparation, veneer fabrication, and bonding.",
    duration: "2-3 visits over 2 weeks",
    price: "From $900 per tooth",
    faqs: [
      { q: "Are veneers permanent?", a: "Veneers typically last 10-15 years and are not reversible." },
    ],
  },
  {
    id: "teeth-whitening",
    icon: "⭐",
    title: "Teeth Whitening",
    description: "Professional in-office whitening that delivers dramatic results safely in a single visit.",
    procedure: "Custom tray fitting and professional-grade whitening gel application with light activation.",
    duration: "60-90 minutes",
    price: "From $350",
    faqs: [
      { q: "How white will my teeth get?", a: "Most patients see 4-8 shades improvement after a single session." },
    ],
  },
  {
    id: "wisdom-tooth",
    icon: "🔧",
    title: "Wisdom Tooth Extraction",
    description: "Safe, comfortable extraction of wisdom teeth to prevent pain, crowding, and infection.",
    procedure: "Local/general anesthesia, surgical extraction, and post-operative care instructions.",
    duration: "30-90 minutes",
    price: "From $250",
    faqs: [
      { q: "Do all wisdom teeth need removal?", a: "Only when causing problems like pain, infection, or crowding." },
    ],
  },
  {
    id: "pediatric-dentistry",
    icon: "👶",
    title: "Pediatric Dentistry",
    description: "Gentle, fun, child-friendly dental care to set the foundation for a lifetime of good oral health.",
    procedure: "Child-specific examination, preventive treatments, sealants, and parental education.",
    duration: "45-60 minutes",
    price: "From $70",
    faqs: [
      { q: "When should my child first see a dentist?", a: "By age 1 or within 6 months of the first tooth appearing." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 to-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Complete Dental Care Solutions
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From preventive checkups to complex restorations — we cover all your dental needs under
            one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-all group">
                <CardHeader>
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <CardTitle className="group-hover:text-indigo-600 transition">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Procedure */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Procedure</h4>
                    <p className="text-sm text-slate-700">{service.procedure}</p>
                  </div>

                  {/* Meta */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4 text-indigo-400" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <DollarSign className="w-4 h-4 text-emerald-500" />
                      <span>{service.price}</span>
                    </div>
                  </div>

                  {/* FAQs */}
                  <div className="mb-5 space-y-2">
                    {service.faqs.map((faq, i) => (
                      <details key={i} className="group/faq bg-slate-50 rounded-lg">
                        <summary className="cursor-pointer text-sm font-medium text-slate-700 px-3 py-2 flex items-center justify-between">
                          {faq.q}
                          <ChevronRight className="w-4 h-4 text-slate-400 group-open/faq:rotate-90 transition-transform" />
                        </summary>
                        <p className="text-sm text-slate-500 px-3 pb-3">{faq.a}</p>
                      </details>
                    ))}
                  </div>

                  <Button className="w-full" asChild>
                    <Link href="/book-appointment">
                      <Calendar className="w-4 h-4" />
                      Book This Service
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-indigo-100 mb-8">
            Book a free consultation and our dentists will recommend the best treatment plan for you.
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50" asChild>
            <Link href="/book-appointment">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
