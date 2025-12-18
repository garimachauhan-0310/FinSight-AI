"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { fetchRecommendation } from "@/lib/api";

const COLORS = ["#4F46E5", "#8B5CF6", "#60A5FA"];

export default function SimulatorPage() {
  const [risk, setRisk] = useState(5);
  const [years, setYears] = useState(10);
  const [recommendation, setRecommendation] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSimulate() {
    try {
      setLoading(true);
      setError("");

      const result = await fetchRecommendation({
        age: 21, // later from onboarding
        riskScore: risk,
        timeHorizon: years,
      });

      setRecommendation(result);
    } catch {
      setError("Unable to fetch recommendation from backend");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#F5F3FF] to-[#F8FAFC] px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900">FinSight AI</h1>
        <p className="mt-2 text-slate-700 font-medium">
          Scenario Simulator — What if?
        </p>
      </div>

      {/* Controls */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">
          Simulation Controls
        </h2>

        {/* Risk */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-800 mb-1">
            Risk Appetite
          </label>
          <p className="text-2xl font-semibold text-indigo-700 mb-2">
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
          <div className="flex justify-between text-xs text-slate-600 mt-1">
            <span>Conservative</span>
            <span>Aggressive</span>
          </div>
        </div>

        {/* Time */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-slate-800 mb-1">
            Time Horizon
          </label>
          <p className="text-2xl font-semibold text-indigo-700 mb-2">
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
          <div className="flex justify-between text-xs text-slate-600 mt-1">
            <span>1 year</span>
            <span>30 years</span>
          </div>
        </div>

        <button
          onClick={handleSimulate}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
        >
          {loading ? "Simulating..." : "Simulate Portfolio"}
        </button>

        {error && (
          <p className="mt-4 text-center text-sm font-medium text-red-600">
            {error}
          </p>
        )}
      </div>

      {/* Results */}
      {recommendation && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chart + Allocation */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Portfolio Allocation
            </h3>

            <div className="h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={[
                      { name: "Stocks", value: recommendation.equity },
                      { name: "Bonds", value: recommendation.debt },
                      { name: "Cash", value: recommendation.cash },
                    ]}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={100}
                  >
                    {COLORS.map((color, i) => (
                      <Cell key={i} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Allocation Numbers */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-100 rounded-xl p-4 text-center">
                <p className="text-sm font-medium text-slate-700">Stocks</p>
                <p className="text-2xl font-bold text-indigo-700">
                  {recommendation.equity}%
                </p>
              </div>

              <div className="bg-slate-100 rounded-xl p-4 text-center">
                <p className="text-sm font-medium text-slate-700">Bonds</p>
                <p className="text-2xl font-bold text-indigo-700">
                  {recommendation.debt}%
                </p>
              </div>

              <div className="bg-slate-100 rounded-xl p-4 text-center">
                <p className="text-sm font-medium text-slate-700">Cash</p>
                <p className="text-2xl font-bold text-indigo-700">
                  {recommendation.cash}%
                </p>
              </div>
            </div>

            {/* Expected Return */}
            <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
              <p className="text-sm text-slate-700">Expected Annual Return</p>
              <p className="text-3xl font-bold text-indigo-700">
                {(recommendation.expected_return * 100).toFixed(1)}%
              </p>
            </div>
          </div>

          {/* Risk Metrics */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Risk Metrics
            </h3>

            <p className="text-slate-800 mb-2">
              Risk Level:{" "}
              <span className="font-semibold text-indigo-700">
                {recommendation.risk_level}
              </span>
            </p>

            <p className="text-slate-800 mb-2">
              Volatility:{" "}
              <span className="font-semibold text-indigo-700">
                {recommendation.volatility.toFixed(1)}%
              </span>
            </p>

            <p className="text-sm text-slate-600 mt-4">
              This portfolio balances growth and stability based on your
              selected risk appetite and investment horizon.
            </p>
          </div>
        </div>
      )}

      {/* CTA */}
      {recommendation && (
        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/trust-ethics")}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white px-10 py-3 rounded-xl font-semibold transition shadow-md"
          >
            View Trust & Ethics →
          </button>
        </div>
      )}
    </div>
  );
}
