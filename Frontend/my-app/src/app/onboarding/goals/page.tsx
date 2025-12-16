"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function GoalsSetupPage() {
  const router = useRouter();

  const [timeHorizon, setTimeHorizon] = useState<string | null>(null);
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);

  const isFormValid = timeHorizon !== null;
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#F5F7FF] to-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-indigo-600 mb-1">
            FinSight AI
          </h1>
          <p className="text-sm text-gray-500 mb-6">📈 Goal & Time Horizon</p>

          <p className="text-gray-600 mb-8">
            Tell us about your investment goals to get personalized
            recommendations
          </p>

          {/* Goal Amount */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Goal Amount <span className="text-gray-400">(Optional)</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                $
              </span>
              <input
                type="number"
                placeholder="Enter target amount"
                className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Time Horizon */}
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Time Horizon
            </p>

            <div className="grid grid-cols-3 gap-3">
              {["< 1 year", "1–3 years", "3–5 years"].map((option) => (
                <div
                  key={option}
                  onClick={() => setTimeHorizon(option)}
                  className={`border rounded-xl p-4 text-center cursor-pointer transition ${
                    timeHorizon === option
                      ? "border-indigo-600 bg-indigo-50"
                      : "hover:border-indigo-500 hover:bg-indigo-50"
                  }`}
                >
                  <p className="text-sm font-medium text-gray-800">{option}</p>
                  <p className="text-xs text-gray-500">
                    {option === "< 1 year"
                      ? "Short-term"
                      : option === "1–3 years"
                      ? "Medium-term"
                      : "Long-term"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Investment */}
          <div className="mb-10">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Monthly Investment Amount
            </p>

            <p className="text-2xl font-semibold text-indigo-600 mb-2">
              ${monthlyInvestment}{" "}
              <span className="text-sm text-gray-500">/ month</span>
            </p>

            <input
              type="range"
              min={100}
              max={5000}
              step={100}
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />

            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>$100</span>
              <span>$5,000</span>
            </div>
          </div>

          {/* Continue Button */}
          <button
            disabled={!isFormValid}
            onClick={() => router.push("/dashboard")}
            className={`w-full py-4 rounded-xl font-semibold transition ${
              isFormValid
                ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}
