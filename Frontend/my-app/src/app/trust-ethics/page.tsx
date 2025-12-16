import {
  ShieldCheck,
  Brain,
  EyeOff,
  Lock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function TrustEthicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F8FF] to-[#EEF3FF] px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-600">FinSight AI</h1>
          <p className="mt-2 text-sm text-gray-500">Trust & Ethics</p>
        </div>

        {/* Commitment to Transparency */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-6 w-6 text-indigo-600 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Our Commitment to Transparency
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                At{" "}
                <span className="font-medium text-indigo-600">FinSight AI</span>
                , we believe trust is earned through transparency. This page
                explains how our technology works, what principles guide us, and
                how we protect your interests at every step.
              </p>
            </div>
          </div>
        </div>

        {/* How Our AI Works */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <Brain className="h-6 w-6 text-indigo-600 mt-1" />
            <div className="w-full">
              <h2 className="text-lg font-semibold text-gray-900">
                How Our AI Works
              </h2>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800">
                    Rule-Based Foundation
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Our core decision-making relies on established financial
                    principles and regulatory guidelines. We use clear,
                    documented rules aligned with industry best practices and
                    compliance standards.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800">
                    ML-Assisted Enhancement
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Machine learning helps identify patterns, provide
                    personalized insights, and improve recommendations over
                    time. However, ML assists our rule-based system — it never
                    replaces human-understandable logic.
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <p className="text-sm text-indigo-700">
                      <span className="font-medium">Explainable Results:</span>{" "}
                      Every recommendation comes with clear reasoning. You will
                      always understand why FinSight AI suggests a particular
                      action or insight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Don't Do */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <EyeOff className="h-6 w-6 text-red-500 mt-1" />
            <div className="w-full">
              <h2 className="text-lg font-semibold text-gray-900">
                What We Don’t Do
              </h2>

              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">
                      No Black-Box Decisions
                    </p>
                    <p className="text-sm text-gray-600">
                      We never make opaque recommendations. Every insight is
                      traceable to clear logic and data sources — no hidden
                      algorithms or mysterious calculations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">
                      No Hidden Commissions
                    </p>
                    <p className="text-sm text-gray-600">
                      We don’t receive kickbacks, referral fees, or commissions
                      from financial institutions. Recommendations are based
                      solely on what’s best for you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">No Data Selling</p>
                    <p className="text-sm text-gray-600">
                      Your financial information is never sold, shared for
                      marketing, or used beyond improving your experience with
                      FinSight AI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Privacy & Security */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <Lock className="h-6 w-6 text-green-600 mt-1" />
            <div className="w-full">
              <h2 className="text-lg font-semibold text-gray-900">
                Data Privacy & Security
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                We take your privacy seriously. Here’s how we protect your
                information:
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Encryption in transit and at rest using industry standards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Minimal data collection — only what’s necessary
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Full user control to review or delete data anytime
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Regular security audits and compliance checks
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Disclaimer */}
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Important Disclaimer
              </h2>

              <div className="mt-3 space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-medium text-indigo-600">
                    FinSight AI
                  </span>{" "}
                  provides educational information and personalized insights to
                  help you make informed financial decisions.
                </p>

                <p>
                  <span className="font-medium">Not Financial Advice:</span> We
                  do not provide personalized financial, investment, tax, or
                  legal advice.
                </p>

                <p>
                  <span className="font-medium">No Guarantees:</span> Market
                  outcomes are inherently unpredictable. Past performance does
                  not guarantee future results.
                </p>

                <p>
                  <span className="font-medium">Your Responsibility:</span>{" "}
                  Final decisions are always yours. Use our insights as one of
                  many tools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          Questions about our practices?{" "}
          <span className="cursor-pointer font-medium text-indigo-600 hover:underline">
            Contact us
          </span>
        </div>
      </div>
    </div>
  );
}
