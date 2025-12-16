"use client";

import { useState } from "react";

export default function OnboardingProfile() {
  const [income, setIncome] = useState(50000);
  const [experience, setExperience] = useState("Beginner");
  const [risk, setRisk] = useState("Medium");
  const [goal, setGoal] = useState("Wealth Growth");

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold text-blue-600">FinSight AI</h1>

        {/* Step Indicator */}
        <div className="mt-6 flex justify-center items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2 font-medium text-blue-600">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs">
              1
            </span>
            Profile
          </div>
          <span>—</span>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-white text-xs">
              2
            </span>
            Goals
          </div>
          <span>—</span>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-white text-xs">
              3
            </span>
            Confirm
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-500">Step 1 of 3</p>
      </div>

      {/* Card */}
      <div className="mx-auto max-w-xl rounded-2xl bg-white/80 backdrop-blur p-8 shadow-lg ring-1 ring-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 text-center">
          Tell us about yourself
        </h2>
        <p className="mt-1 text-center text-sm text-gray-600">
          We'll use this information to personalize your investment
          recommendations
        </p>

        {/* Age */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            What's your age?
          </label>
          <input
            type="number"
            min={18}
            placeholder="Enter your age"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Income Slider */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Monthly income
          </label>
          <input
            type="range"
            min={10000}
            max={200000}
            step={5000}
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="mt-3 w-full accent-blue-600"
          />
          <p className="mt-2 text-center text-blue-600 font-medium">
            ₹{income.toLocaleString()} / month
          </p>
        </div>

        {/* Investment Experience */}
        <div className="mt-8">
          <p className="text-sm font-medium text-gray-700">
            Investment experience
          </p>

          <div className="mt-3 grid grid-cols-3 gap-3">
            {["Beginner", "Intermediate", "Advanced"].map((level) => (
              <button
                key={level}
                onClick={() => setExperience(level)}
                className={`rounded-xl border px-3 py-3 text-left text-sm transition ${
                  experience === level
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                }`}
              >
                <p className="font-medium">{level}</p>
                <p className="text-xs">
                  {level === "Beginner"
                    ? "New to investing"
                    : level === "Intermediate"
                    ? "Some experience"
                    : "Experienced investor"}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Risk Appetite */}
        <div className="mt-8">
          <p className="text-sm font-medium text-gray-700">Risk appetite</p>

          <div className="mt-3 grid grid-cols-3 gap-3">
            {["Low", "Medium", "High"].map((level) => (
              <button
                key={level}
                onClick={() => setRisk(level)}
                className={`rounded-xl border px-3 py-3 text-left text-sm transition ${
                  risk === level
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                }`}
              >
                <p className="font-medium">{level}</p>
                <p className="text-xs">
                  {level === "Low"
                    ? "Preserve capital"
                    : level === "Medium"
                    ? "Balanced approach"
                    : "Maximum growth"}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Primary Goal */}
        <div className="mt-8">
          <p className="text-sm font-medium text-gray-700">
            Primary investment goal
          </p>

          <div className="mt-3 grid grid-cols-3 gap-3">
            {["Wealth Growth", "Emergency Fund", "Short-term Goal"].map((g) => (
              <button
                key={g}
                onClick={() => setGoal(g)}
                className={`rounded-xl border px-3 py-3 text-left text-sm transition ${
                  goal === g
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                }`}
              >
                <p className="font-medium">{g}</p>
                <p className="text-xs">
                  {g === "Wealth Growth"
                    ? "Long-term gains"
                    : g === "Emergency Fund"
                    ? "Safety net"
                    : "1–3 years"}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Continue */}
        <button
          disabled
          className="mt-10 w-full rounded-xl bg-gray-300 py-3 text-gray-500 font-semibold cursor-not-allowed"
        >
          Continue →
        </button>
      </div>
    </main>
  );
}
