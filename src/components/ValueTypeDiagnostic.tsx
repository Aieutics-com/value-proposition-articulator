"use client";

import { useState } from "react";
import { VALUE_TYPES } from "@/lib/diagnostic-data";

export default function ValueTypeDiagnostic() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="mt-10">
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">
        Value Type Framework
      </h3>
      <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] leading-relaxed mb-6">
        Based on your answers, consider: which value type does your pitch lead
        with? And which value type does your buyer&apos;s budget process respond to?
      </p>

      {/* Spectrum bar */}
      <div className="mb-8 rounded-xl border border-[var(--color-grey-light)] bg-[var(--color-white)] p-5">
        <div className="flex items-center justify-between mb-3">
          {VALUE_TYPES.map((vt, i) => (
            <button
              key={vt.id}
              onClick={() => toggle(vt.id)}
              className={`
                relative flex-1 text-center cursor-pointer transition-all duration-200
                ${i < VALUE_TYPES.length - 1 ? "border-r border-[var(--color-grey-light)]" : ""}
              `}
            >
              <span
                className={`
                  font-[family-name:var(--font-heading)] text-xs font-bold block
                  transition-colors duration-200
                  ${expandedId === vt.id ? "text-[var(--color-orange)]" : "text-[var(--color-foreground)]"}
                `}
              >
                {vt.name}
              </span>
            </button>
          ))}
        </div>
        {/* Gradient bar */}
        <div className="h-1.5 rounded-full bg-gradient-to-r from-[var(--color-green)] via-[var(--color-amber)] to-[var(--color-grey)]" />
        <div className="flex items-center justify-between mt-2">
          <span className="font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--color-grey)]">
            Easiest to measure / fastest to prove
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--color-grey)]">
            Hardest to measure / longest to prove
          </span>
        </div>
      </div>

      {/* Value type cards */}
      <div className="space-y-3">
        {VALUE_TYPES.map((vt) => {
          const isExpanded = expandedId === vt.id;
          return (
            <div
              key={vt.id}
              className="rounded-xl border border-[var(--color-grey-light)] bg-[var(--color-white)] overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(vt.id)}
                className="w-full flex items-center justify-between p-5 cursor-pointer text-left"
              >
                <div>
                  <span className="font-[family-name:var(--font-heading)] text-sm font-bold">
                    {vt.name}
                  </span>
                  <span className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] ml-2">
                    — {vt.tagline}
                  </span>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`flex-shrink-0 ml-3 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 border-t border-[var(--color-grey-light)]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div>
                      <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-wider text-[var(--color-orange)] mb-1">
                        Decision-maker
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-foreground)]">
                        {vt.decisionMaker}
                      </p>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-wider text-[var(--color-orange)] mb-1">
                        Proof required
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-foreground)]">
                        {vt.proofRequired}
                      </p>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-wider text-[var(--color-orange)] mb-1">
                        Closing speed
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-foreground)]">
                        {vt.closingSpeed}
                      </p>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-wider text-[var(--color-orange)] mb-1">
                        Warning sign
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-foreground)] italic">
                        {vt.warningSign}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Alignment test callout */}
      <div className="mt-6 border border-[var(--color-orange)] bg-[var(--color-orange-vsoft)] rounded-xl p-5">
        <p className="font-[family-name:var(--font-heading)] text-sm font-bold mb-2">
          The Alignment Test
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-foreground)] leading-relaxed">
          The value type you articulate must match the value type your buyer
          decides on. When these diverge, you get a specific downstream symptom:
          enthusiastic meetings that don&apos;t convert to pipeline. The fix isn&apos;t
          better sales — it&apos;s better positioning.
        </p>
      </div>
    </section>
  );
}
