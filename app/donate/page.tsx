import { DonationForm } from "./donationform";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Hero */}
        <section className="text-center space-y-8">
          <div>
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
              Donation
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              <span style={{ color: "#228b22" }}>Donate</span> to Us
            </h1>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Your donation go a long way to make a difference.
          </p>
        </section>
        {/* Donation Form */}
        <section className="max-w-4xl mx-auto">
          <DonationForm />
        </section>
      </div>
    </main>
  );
}
