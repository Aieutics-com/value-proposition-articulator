import Link from "next/link";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Video background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover opacity-50"
        >
          <source src={`${basePath}/hero-bg.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6 md:px-12">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Image
            src={`${basePath}/aieutics_transparentbg_logo.png`}
            alt="Aieutics"
            width={80}
            height={80}
            className="h-20 w-auto brightness-0 invert"
          />
          <span className="font-[family-name:var(--font-body)] text-sm text-white/50 italic hidden sm:inline">
            See further. Think deeper. Break through.
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex-1 flex items-center justify-center px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white animate-text-focus-in">
            Can Your Buyer Repeat
            <br />
            <span className="text-[var(--color-orange)]">Your Value Proposition?</span>
          </h1>

          <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-white leading-relaxed mb-4">
            20 binary questions. 5 dimensions. No middle ground.
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm md:text-base text-white/70 leading-relaxed mb-4">
            The test is simple: if your champion can&apos;t explain why they should
            buy from you in one sentence to their boss, your value proposition
            isn&apos;t working.
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm md:text-base text-white/70 leading-relaxed mb-10">
            This diagnostic tests five dimensions of value proposition strength
            — including whether the type of value you articulate matches the type
            your buyer actually decides on.
          </p>

          <Link
            href="/diagnostic"
            className="inline-block bg-[var(--color-orange)] text-white font-[family-name:var(--font-heading)] font-bold text-lg px-12 py-4 rounded-xl shadow-[0_0_20px_rgba(255,95,31,0.2)] hover:shadow-[0_0_40px_rgba(255,95,31,0.3)] hover:scale-[1.02] transition-all duration-300"
          >
            Start the Diagnostic
          </Link>
          <p className="font-[family-name:var(--font-body)] text-sm text-white/50 mt-4">
            Takes 3–5 minutes. Only what is concretely true today counts as Yes.
          </p>

          {/* What This Tool Tests — 5 cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-5 gap-4 text-left">
            {[
              {
                label: "Articulation Clarity",
                desc: "Can you say it in one sentence a buyer would repeat?",
              },
              {
                label: "Buyer-Centricity",
                desc: "Is the value framed in the buyer's world, not yours?",
              },
              {
                label: "Differentiation",
                desc: "Does your buyer know why you and not the alternatives?",
              },
              {
                label: "Quantifiability",
                desc: "Can the buyer build an internal business case?",
              },
              {
                label: "Value Type Alignment",
                desc: "Does the value you articulate match the value your buyer decides on?",
              },
            ].map((dim, i) => (
              <div
                key={i}
                className="border border-white/12 rounded-xl p-3 hover:border-[var(--color-orange)] hover:shadow-[0_0_20px_rgba(255,95,31,0.1)] transition-all duration-300 bg-black/35 backdrop-blur-md"
              >
                <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-wider text-[var(--color-orange)] mb-1">
                  {dim.label}
                </p>
                <p className="font-[family-name:var(--font-body)] text-xs text-white/55">
                  {dim.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Value Type Bonus callout */}
          <div className="mt-10 border border-white/12 bg-black/35 backdrop-blur-md rounded-xl p-5 text-left">
            <p className="font-[family-name:var(--font-heading)] text-sm font-bold mb-2 text-white">
              Includes: Value Type Framework
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-white/70 leading-relaxed">
              This diagnostic includes a Value Type framework based on Philippe
              Meda&apos;s innovation research — helping you identify whether you&apos;re
              pitching Financial value to an Operational buyer, or Strategic value
              to a Financial decision-maker.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-6 border-t border-white/8">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
          <Image
            src={`${basePath}/aieutics_transparentbg_logo.png`}
            alt="Aieutics"
            width={24}
            height={24}
            className="h-6 w-auto opacity-30 brightness-0 invert"
          />
          <p className="font-[family-name:var(--font-body)] text-xs text-white/35">
            Built by{" "}
            <a href="https://www.aieutics.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Aieutics</a>{" "}
            from two decades of practice across strategy consulting, executive coaching, and digital transformation.
            These diagnostics are starting points. If your results raise questions,{" "}
            <a href="https://www.aieutics.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">let&apos;s talk</a>.
          </p>
        </div>
      </footer>
    </main>
  );
}
