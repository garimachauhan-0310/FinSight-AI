"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { getPortfolioRecommendation } from "@/lib/recommendations";

const COLORS = ["#4F46E5", "#8B5CF6", "#60A5FA"];

export default function SimulatorPage() {
  const [risk, setRisk] = useState(5);
  const [years, setYears] = useState(10);
  const router = useRouter();

  // Allocation logic (simple MVP logic)
  const recommendation = getPortfolioRecommendation({
    age: 21, // later this comes from onboarding
    riskScore: risk, // slider value
    timeHorizon: years, // slider value
  });

  const stocks = recommendation.equity;
  const bonds = recommendation.debt;
  const cash = recommendation.cash;

  const expectedReturn = recommendation.expectedReturn;
  const volatility = recommendation.volatility;
  const riskLabel = recommendation.riskLevel;

  const data = [
    { name: "Stocks", value: stocks },
    { name: "Bonds", value: bonds },
    { name: "Cash", value: cash },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#F5F3FF] to-[#F8FAFC] px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#1E1B4B]">FinSight AI</h1>
        <p className="mt-2 text-[#475569]">Scenario Simulator — What if?</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT: Controls */}
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-[#1E293B] mb-6">
            Controls
          </h2>

          {/* Risk */}
          <div className="mb-8">
            <label className="text-sm font-medium text-[#334155]">
              Risk Appetite
            </label>
            <p className="text-2xl font-semibold text-[#1E1B4B] mb-2">
              {risk} / 10
            </p>
            <input
              type="range"
              min={1}
              max={10}
              value={risk}
              onChange={(e) => setRisk(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-[#64748B] mt-1">
              <span>Conservative</span>
              <span>Aggressive</span>
            </div>
          </div>

          {/* Time */}
          <div className="mb-8">
            <label className="text-sm font-medium text-[#334155]">
              Time Horizon
            </label>
            <p className="text-2xl font-semibold text-[#1E1B4B] mb-2">
              {years} years
            </p>
            <input
              type="range"
              min={1}
              max={30}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-purple-600"
            />
            <div className="flex justify-between text-xs text-[#64748B] mt-1">
              <span>1 year</span>
              <span>30 years</span>
            </div>
          </div>

          {/* Risk Level */}
          <div className="bg-[#F1F5F9] rounded-xl p-4">
            <p className="text-xs text-[#64748B]">Risk Level</p>
            <p className="text-lg font-semibold text-[#1E1B4B]">{riskLabel}</p>
          </div>
        </div>

        {/* RIGHT: Portfolio */}
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-[#1E293B] mb-6">
            Portfolio Allocation
          </h2>

          {/* PIE CHART */}
          <div className="h-64 w-full">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={4}
                >
                  {data.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Allocation Numbers */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <Stat label="Stocks" value={stocks} />
            <Stat label="Bonds" value={bonds} />
            <Stat label="Cash" value={cash} />
          </div>

          {/* Risk Metrics */}
          <div className="bg-[#F8FAFC] rounded-xl p-4 mt-6">
            <h3 className="text-sm font-medium text-[#334155] mb-3">
              Risk Metrics
            </h3>
            <div className="flex justify-between">
              <Metric
                label="Expected Return"
                value={`${(expectedReturn * 100).toFixed(1)}%`}
              />
              <Metric label="Volatility" value={`${volatility.toFixed(1)}%`} />
            </div>
          </div>

          {/* Explanation */}
          <div className="mt-6 bg-gradient-to-r from-[#EEF2FF] to-[#F5F3FF] rounded-xl p-4 border border-indigo-100">
            <h3 className="text-sm font-semibold text-[#1E1B4B] mb-2">
              Strategy Explanation
            </h3>
            <p className="text-sm text-[#334155] leading-relaxed">
              With a <strong>{risk}/10</strong> risk appetite and a{" "}
              <strong>{years}-year</strong> horizon, the portfolio balances
              growth and stability. Equity drives returns, while bonds and cash
              reduce volatility and downside risk.
            </p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="text-center mt-12">
        <button
          onClick={() => router.push("/trust-ethics")}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white px-10 py-3 rounded-xl font-medium transition shadow-md"
        >
          View Trust & Ethics →
        </button>
      </div>
    </div>
  );
}

/* Small components */

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-[#F1F5F9] p-4 text-center">
      <p className="text-xs text-[#64748B]">{label}</p>
      <p className="text-2xl font-semibold text-[#1E1B4B]">{value}%</p>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-[#64748B]">{label}</p>
      <p className="text-lg font-semibold text-[#4338CA]">{value}</p>
    </div>
  );
}
