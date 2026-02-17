import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--color-background)]">
      {/* Header */}
      <header className="px-6 py-6 md:px-12">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/aieutics_transparentbg_logo.png`}
            alt="Aieutics"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
          <span className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] italic hidden sm:inline">
            See further. Think deeper. Break through.
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[var(--color-foreground)] animate-text-focus-in">
            Can Your Buyer Repeat
            <br />
            <span className="text-[var(--color-orange)]">Your Value Proposition?</span>
          </h1>

          <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[var(--color-foreground)] leading-relaxed mb-4">
            20 binary questions. 5 dimensions. No middle ground.
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm md:text-base text-[var(--color-grey)] leading-relaxed mb-4">
            The test is simple: if your champion can&apos;t explain why they should
            buy from you in one sentence to their boss, your value proposition
            isn&apos;t working.
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm md:text-base text-[var(--color-grey)] leading-relaxed mb-10">
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
          <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] mt-4">
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
                className="border border-[var(--color-grey-light)] rounded-xl p-3 hover:border-[var(--color-orange)] hover:shadow-[0_0_20px_rgba(255,95,31,0.1)] transition-all duration-300 bg-[var(--color-white)]"
              >
                <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-wider text-[var(--color-orange)] mb-1">
                  {dim.label}
                </p>
                <p className="font-[family-name:var(--font-body)] text-xs text-[var(--color-grey)]">
                  {dim.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Value Type Bonus callout */}
          <div className="mt-10 border border-[var(--color-grey-light)] bg-[var(--color-orange-vsoft)] rounded-xl p-5 text-left">
            <p className="font-[family-name:var(--font-heading)] text-sm font-bold mb-2">
              Includes: Value Type Framework
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-foreground)] leading-relaxed">
              This diagnostic includes a Value Type framework based on Philippe
              Meda&apos;s innovation research — helping you identify whether you&apos;re
              pitching Financial value to an Operational buyer, or Strategic value
              to a Financial decision-maker.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-[var(--color-grey-light)]">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/aieutics_transparentbg_logo.png`}
            alt="Aieutics"
            width={24}
            height={24}
            className="h-6 w-auto opacity-40"
          />
          <p className="font-[family-name:var(--font-body)] text-xs text-[var(--color-grey)]">
            Developed by Aieutics from the Critical Path Layers framework,
            integrating Philippe Meda&apos;s value type taxonomy.
          </p>
        </div>
      </footer>
    </main>
  );
}
