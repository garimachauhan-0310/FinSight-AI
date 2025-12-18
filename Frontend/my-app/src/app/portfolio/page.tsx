"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PortfolioPage() {
  const router = useRouter();
  const [recommendation, setRecommendation] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("finsight_final_recommendation");
    if (stored) {
      setRecommendation(JSON.parse(stored));
    }
  }, []);

  if (!recommendation) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        No portfolio found. Please run a simulation first.
      </div>
    );
  }

  const { allocation, expected_return, volatility, risk_level } =
    recommendation;

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F5F7FF] to-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">
            Your Portfolio
          </h1>
          <p className="text-gray-600">
            This is your long-term investment strategy
          </p>
        </div>

        {/* Allocation */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-lg font-medium text-gray-800 mb-6 text-center">
            Asset Allocation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-indigo-50 rounded-xl p-6">
              <p className="text-sm text-gray-600">Equity (Growth Engine)</p>
              <p className="text-3xl font-bold text-indigo-700">
                {allocation.equity}%
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Drives long-term wealth creation
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <p className="text-sm text-gray-600">Debt (Stability)</p>
              <p className="text-3xl font-bold text-green-700">
                {allocation.debt}%
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Cushions market volatility
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <p className="text-sm text-gray-600">Cash (Liquidity)</p>
              <p className="text-3xl font-bold text-purple-700">
                {allocation.cash}%
              </p>
              <p className="mt-2 text-xs text-gray-500">
                For flexibility and emergencies
              </p>
            </div>
          </div>
        </div>

        {/* Risk & Return */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-lg font-medium text-gray-800 mb-6">
            Risk & Return Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-100 rounded-xl p-5 text-center">
              <p className="text-sm text-gray-600">Expected Annual Return</p>
              <p className="text-2xl font-bold text-indigo-700">
                {(expected_return * 100).toFixed(1)}%
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-5 text-center">
              <p className="text-sm text-gray-600">Volatility</p>
              <p className="text-2xl font-bold text-rose-600">
                {volatility.toFixed(1)}%
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-5 text-center">
              <p className="text-sm text-gray-600">Overall Risk Level</p>
              <p className="text-2xl font-bold text-gray-800">{risk_level}</p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-indigo-50 rounded-2xl p-8 mb-10">
          <h2 className="text-lg font-medium text-indigo-800 mb-4">
            Investment Philosophy
          </h2>
          <p className="text-sm text-indigo-700 leading-relaxed">
            This portfolio is designed to balance growth and stability based on
            your age, goals, and risk tolerance. Short-term market movements
            should not influence long-term decisions. Discipline and patience
            are key to realizing expected returns.
          </p>
        </div>

        {/* Behavioural Guidance */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            What to Expect (Important)
          </h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Markets will fluctuate — this is normal.</li>
            <li>• Avoid checking your portfolio daily.</li>
            <li>• Review and rebalance once or twice a year.</li>
            <li>• Stick to the plan during market downturns.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center flex justify-center gap-4">
          <button
            onClick={() => router.push("/simulator")}
            className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50"
          >
            Revisit Simulation
          </button>

          <button
            onClick={() => router.push("/explaination")}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white px-8 py-3 rounded-xl font-semibold transition shadow-md"
          >
            Explain This Recommendation →
          </button>
        </div>
      </div>
    </section>
  );
}
