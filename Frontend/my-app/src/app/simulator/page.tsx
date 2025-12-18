"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import { fetchRecommendation } from "@/lib/api";

const COLORS = ["#4F46E5", "#8B5CF6", "#60A5FA"];

export default function SimulatorPage() {
  const router = useRouter();

  const [risk, setRisk] = useState(5);
  const [years, setYears] = useState(10);
  const [recommendation, setRecommendation] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userProfile, setUserProfile] = useState<any>(null);

  /* -----------------------------
     Load onboarding profile
  ------------------------------*/
  useEffect(() => {
    const stored = localStorage.getItem("finsight_user_profile");
    if (stored) {
      setUserProfile(JSON.parse(stored));
    }
  }, []);

  if (!userProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-700">
        Loading your profile…
      </div>
    );
  }

  /* -----------------------------
     Helpers
  ------------------------------*/
  const mapRiskToScore = (risk: string) => {
    if (risk === "Low") return 3;
    if (risk === "Medium") return 6;
    return 8;
  };

  const mapGoalToHorizon = (goal: string) => {
    if (goal === "Short-term Goal") return 2;
    if (goal === "Emergency Fund") return 3;
    return years;
  };

  /* -----------------------------
     Simulate
  ------------------------------*/
  async function handleSimulate() {
    try {
      setLoading(true);
      setError("");

      const result = await fetchRecommendation({
        age: userProfile.age,
        riskScore: mapRiskToScore(userProfile.risk),
        timeHorizon: mapGoalToHorizon(userProfile.goal),
      });

      setRecommendation(result);
    } catch {
      setError("Unable to fetch recommendation from backend");
    } finally {
      setLoading(false);
    }
  }

  const allocationData = recommendation && [
    { name: "Stocks", value: recommendation.allocation.equity },
    { name: "Bonds", value: recommendation.allocation.debt },
    { name: "Cash", value: recommendation.allocation.cash },
  ];

  const monteCarloData = recommendation && [
    { scenario: "Worst Case", value: recommendation.simulation.worst_case },
    { scenario: "Median", value: recommendation.simulation.median },
    { scenario: "Best Case", value: recommendation.simulation.best_case },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#F5F3FF] to-[#F8FAFC] px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900">FinSight AI</h1>
        <p className="mt-2 text-slate-700 font-medium">
          Personalized Scenario Simulator
        </p>
      </div>

      {/* Controls */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">
          Adjust Your Scenario
        </h2>

        {/* Risk */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-800 mb-1">
            Risk Sensitivity
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
        </div>

        {/* Time */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-slate-800 mb-1">
            Investment Horizon
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
          {/* Allocation */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Portfolio Allocation
            </h3>

            <div className="h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={allocationData}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={100}
                  >
                    {COLORS.map((color, i) => (
                      <Cell key={i} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      color: "#ffffff",
                      borderRadius: "8px",
                      border: "none",
                    }}
                    itemStyle={{ color: "#ffffff" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {allocationData.map((item) => (
                <div
                  key={item.name}
                  className="bg-slate-100 rounded-xl p-4 text-center"
                >
                  <p className="text-sm font-medium text-slate-800">
                    {item.name}
                  </p>
                  <p className="text-2xl font-bold text-indigo-700">
                    {item.value}%
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
                <p className="text-sm font-medium text-slate-800">
                  Expected Annual Return
                </p>
                <p className="text-3xl font-bold text-indigo-700">
                  {(recommendation.expected_return * 100).toFixed(1)}%
                </p>
              </div>

              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center">
                <p className="text-sm font-medium text-slate-800">Volatility</p>
                <p className="text-3xl font-bold text-rose-600">
                  {recommendation.volatility.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>

          {/* Monte Carlo */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Monte Carlo Outcomes (₹1,00,000 Invested)
            </h3>

            <div className="h-64">
              <ResponsiveContainer>
                <BarChart data={monteCarloData}>
                  <XAxis dataKey="scenario" stroke="#1f2937" />
                  <YAxis stroke="#1f2937" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      color: "#ffffff",
                      borderRadius: "8px",
                      border: "none",
                    }}
                    formatter={(v: number) => `₹${v.toLocaleString()}`}
                  />
                  <Bar dataKey="value" fill="#6366F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-100 rounded-xl p-4 text-center">
                <p className="text-sm font-medium text-slate-800">Worst Case</p>
                <p className="text-lg font-bold text-slate-900">
                  ₹{recommendation.simulation.worst_case.toLocaleString()}
                </p>
              </div>
              <div className="bg-slate-100 rounded-xl p-4 text-center">
                <p className="text-sm font-medium text-slate-800">Median</p>
                <p className="text-lg font-bold text-slate-900">
                  ₹{recommendation.simulation.median.toLocaleString()}
                </p>
              </div>
              <div className="bg-slate-100 rounded-xl p-4 text-center">
                <p className="text-sm font-medium text-slate-800">Best Case</p>
                <p className="text-lg font-bold text-slate-900">
                  ₹{recommendation.simulation.best_case.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
              <p className="text-sm font-medium text-slate-800">
                Probability of Loss
              </p>
              <p className="text-3xl font-bold text-indigo-700">
                {(recommendation.simulation.probability_of_loss * 100).toFixed(
                  0
                )}
                %
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FINAL CTA */}
      {recommendation && (
        <div className="text-center mt-12 flex justify-center gap-4">
          <button
            onClick={() => router.push("/trust-ethics")}
            className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50"
          >
            Trust & Ethics
          </button>

          <button
            onClick={() => {
              localStorage.setItem(
                "finsight_final_recommendation",
                JSON.stringify(recommendation)
              );
              router.push("/portfolio");
            }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white px-8 py-3 rounded-xl font-semibold transition shadow-md"
          >
            Lock This Portfolio →
          </button>
        </div>
      )}
    </div>
  );
}
