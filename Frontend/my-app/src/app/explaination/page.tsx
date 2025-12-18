"use client";

import { useRouter } from "next/navigation";

export default function ExplanationPage() {
  const router = useRouter();

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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
              ✨
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Your Recommendation Explained
            </h2>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-lg mb-6 text-gray-700">
            We recommended{" "}
            <span className="font-semibold text-indigo-600">60% equity</span>{" "}
            because you are
            <span className="font-semibold text-indigo-600"> 21 years old</span>
            , investing for
            <span className="font-semibold text-indigo-600"> 5 years</span>, and
            can tolerate
            <span className="font-semibold text-indigo-600">
              {" "}
              moderate volatility
            </span>
            .
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-blue-600">21</p>
              <p className="text-sm text-gray-600">Years Old</p>
            </div>

            <div className="bg-indigo-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-indigo-600">5 Years</p>
              <p className="text-sm text-gray-600">Time Horizon</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-purple-600">60%</p>
              <p className="text-sm text-gray-600">Equity Allocation</p>
            </div>
          </div>
        </div>

        {/* What Influenced This Decision */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            What Influenced This Decision?
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            See how different factors contributed to your personalized
            recommendation
          </p>

          {/* Factor */}
          <div className="mb-5">
            <div className="flex justify-between mb-2">
              <p className="font-medium text-gray-700">Time Horizon</p>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                High Influence
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-green-500 rounded-full w-[85%]" />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              5-year investment period allows for equity growth
            </p>
          </div>

          <div className="mb-5">
            <div className="flex justify-between mb-2">
              <p className="font-medium text-gray-700">Risk Appetite</p>
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                Medium Influence
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-500 rounded-full w-[65%]" />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Moderate tolerance supports balanced allocation
            </p>
          </div>

          <div className="mb-5">
            <div className="flex justify-between mb-2">
              <p className="font-medium text-gray-700">Income Stability</p>
              <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                Medium Influence
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-orange-500 rounded-full w-[55%]" />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Steady income provides investment buffer
            </p>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <p className="font-medium text-gray-700">Market Volatility</p>
              <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                Low Influence
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-gray-400 rounded-full w-[35%]" />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Current conditions are relatively stable
            </p>
          </div>
        </div>

        {/* Why Not Alternatives */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            Why Not These Alternatives?
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            We considered other options, but here’s why they don’t fit as well
          </p>

          <div className="border rounded-xl p-4 mb-4">
            <p className="font-medium text-gray-800">80% Equity</p>
            <span className="inline-block text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full my-2">
              Too aggressive for your risk profile
            </span>
            <p className="text-sm text-gray-600">
              Higher equity would expose you to excessive volatility that may
              require longer recovery if markets decline.
            </p>
          </div>

          <div className="border rounded-xl p-4 mb-4">
            <p className="font-medium text-gray-800">Fixed Deposits</p>
            <span className="inline-block text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full my-2">
              Returns too low for your time horizon
            </span>
            <p className="text-sm text-gray-600">
              FD returns barely beat inflation and limit long-term wealth
              creation.
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <p className="font-medium text-gray-800">100% Bonds</p>
            <span className="inline-block text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full my-2">
              Overly conservative for your age
            </span>
            <p className="text-sm text-gray-600">
              Bonds alone don’t provide enough growth potential for a young
              investor.
            </p>
          </div>
        </div>

        {/* Why 60% Equity Works Best */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center">
              ✓
            </div>
            <h2 className="text-lg font-semibold text-green-800">
              Why 60% Equity Works Best for You
            </h2>
          </div>

          <p className="text-gray-700 mb-4">
            A{" "}
            <span className="font-semibold text-green-700">
              60% equity allocation
            </span>{" "}
            provides the right balance between growth and stability based on
            your age, goals, and risk comfort.
          </p>

          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="text-green-600 font-bold">•</span>
              At <strong>21 years old</strong>, you have time to recover from
              short-term market volatility.
            </li>
            <li className="flex gap-2">
              <span className="text-green-600 font-bold">•</span>A{" "}
              <strong>5-year investment horizon</strong> allows equity
              investments to compound meaningfully.
            </li>
            <li className="flex gap-2">
              <span className="text-green-600 font-bold">•</span>
              Your <strong>moderate risk appetite</strong> supports growth
              exposure without excessive stress.
            </li>
            <li className="flex gap-2">
              <span className="text-green-600 font-bold">•</span>
              The remaining <strong>40% in debt</strong> helps stabilize returns
              during market downturns.
            </li>
          </ul>

          <p className="text-sm text-gray-600 mt-4">
            This allocation maximizes long-term potential while keeping
            volatility within a comfortable range.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => router.push("/simulator")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition shadow-md"
          >
            Proceed with This Recommendation →
          </button>
        </div>
      </div>
    </section>
  );
}
