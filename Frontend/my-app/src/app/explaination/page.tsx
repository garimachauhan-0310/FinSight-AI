"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ExplanationPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [recommendation, setRecommendation] = useState<any>(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("finsight_user_profile");
    const storedRec = localStorage.getItem("finsight_final_recommendation");

    if (storedProfile && storedRec) {
      setProfile(JSON.parse(storedProfile));
      setRecommendation(JSON.parse(storedRec));
    }
  }, []);

  if (!profile || !recommendation) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        No recommendation found. Please run a simulation first.
      </div>
    );
  }

  const { age, risk, goal } = profile;
  const { allocation, risk_level } = recommendation;

  const timeHorizon =
    goal === "Short-term Goal"
      ? 2
      : goal === "Emergency Fund"
      ? 3
      : "Long-term";

  const equity = allocation.equity;

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F5F7FF] to-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">
            FinSight AI
          </h1>
          <p className="text-gray-600">
            Understanding Your Personalized Investment Recommendation
          </p>
        </div>

        {/* Recommendation Explained */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Your Recommendation Explained
          </h2>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-lg mb-6 text-gray-700">
            We recommended{" "}
            <span className="font-semibold text-indigo-600">
              {equity}% equity
            </span>{" "}
            because you are{" "}
            <span className="font-semibold text-indigo-600">
              {age} years old
            </span>
            , your investment goal is{" "}
            <span className="font-semibold text-indigo-600">{goal}</span>, and
            you have a{" "}
            <span className="font-semibold text-indigo-600">
              {risk.toLowerCase()}
            </span>{" "}
            risk appetite.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-blue-600">{age}</p>
              <p className="text-sm text-gray-600">Your Age</p>
            </div>

            <div className="bg-indigo-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-indigo-600">
                {timeHorizon}
              </p>
              <p className="text-sm text-gray-600">Time Horizon</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-purple-600">{equity}%</p>
              <p className="text-sm text-gray-600">Equity Allocation</p>
            </div>
          </div>
        </div>

        {/* What Influenced This Decision */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            What Influenced This Decision?
          </h2>

          {[
            {
              label: "Time Horizon",
              value: 80,
              desc: "Longer horizons allow equities to recover from volatility",
              color: "bg-green-500",
            },
            {
              label: "Risk Appetite",
              value: risk === "High" ? 80 : risk === "Medium" ? 60 : 40,
              desc: "Your comfort with market swings shaped allocation",
              color: "bg-blue-500",
            },
            {
              label: "Age",
              value: age < 30 ? 75 : age < 45 ? 60 : 40,
              desc: "Younger investors can afford higher growth exposure",
              color: "bg-indigo-500",
            },
          ].map((item) => (
            <div key={item.label} className="mb-5">
              <div className="flex justify-between mb-2">
                <p className="font-medium text-gray-700">{item.label}</p>
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  Influence
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 ${item.color} rounded-full`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why This Allocation Works */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-semibold text-green-800 mb-3">
            Why This Portfolio Works for You
          </h2>

          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              • Your age allows you to stay invested through market cycles.
            </li>
            <li>
              • {equity}% equity balances growth with your {risk.toLowerCase()}{" "}
              risk tolerance.
            </li>
            <li>• The remaining allocation adds stability and liquidity.</li>
            <li>
              • The portfolio aligns with a {risk_level.toLowerCase()} risk
              profile.
            </li>
          </ul>

          <p className="text-sm text-gray-600 mt-4">
            Staying disciplined with this allocation is more important than
            reacting to short-term market movements.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center flex justify-center gap-4">
          <button
            onClick={() => router.push("/portfolio")}
            className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50"
          >
            Back to Portfolio
          </button>

          <button
            onClick={() => router.push("/simulator")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition shadow-md"
          >
            Re-run Simulation
          </button>
        </div>
      </div>
    </section>
  );
}
