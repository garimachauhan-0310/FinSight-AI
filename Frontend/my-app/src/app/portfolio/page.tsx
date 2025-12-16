"use client";
import { useRouter } from "next/navigation";

export default function PortfolioPage() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F5F7FF] to-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">
            FinSight AI
          </h1>
          <p className="text-gray-600">Your Recommended Portfolio</p>
          <p className="text-sm text-gray-500">
            A personalized investment strategy designed for your goals
          </p>
        </div>

        {/* Portfolio Split */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-lg font-medium text-gray-700 mb-6 text-center">
            Portfolio Split
          </h2>

          {/* Segmented Donut Chart */}
          <div className="flex justify-center mb-6">
            <div
              className="w-64 h-64 rounded-full relative"
              style={{
                background: `conic-gradient(
        #3B82F6 0% 50%,     /* Equity 50% */
        #10B981 50% 80%,   /* Debt 30% */
        #8B5CF6 80% 100%   /* Hybrid 20% */
      )`,
              }}
            >
              {/* Inner circle */}
              <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center text-sm text-gray-600">
                Portfolio
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              Equity 50%
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              Debt 30%
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500" />
              Hybrid 20%
            </div>
          </div>
        </div>

        {/* Recommended Investments */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-800 mb-6">
            Recommended Investments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <div className="flex justify-between mb-3">
                <p className="font-medium text-gray-800">HDFC Equity Fund</p>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                  High
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Expected Return: 12–15%
              </p>
              <p className="text-sm text-gray-500">Category: Equity</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <div className="flex justify-between mb-3">
                <p className="font-medium text-gray-800">SBI Bluechip Fund</p>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                  High
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Expected Return: 10–13%
              </p>
              <p className="text-sm text-gray-500">Category: Equity</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <div className="flex justify-between mb-3">
                <p className="font-medium text-gray-800">
                  ICICI Prudential Bond Fund
                </p>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                  Low
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Expected Return: 6–8%
              </p>
              <p className="text-sm text-gray-500">Category: Debt</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <div className="flex justify-between mb-3">
                <p className="font-medium text-gray-800">
                  Axis Treasury Advantage Fund
                </p>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                  Low
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Expected Return: 5–7%
              </p>
              <p className="text-sm text-gray-500">Category: Debt</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <div className="flex justify-between mb-3">
                <p className="font-medium text-gray-800">
                  Kotak Balanced Advantage Fund
                </p>
                <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                  Medium
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Expected Return: 8–11%
              </p>
              <p className="text-sm text-gray-500">Category: Hybrid</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => router.push("/explaination")}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white px-8 py-3 rounded-xl font-medium transition shadow-md"
          >
            Explain This Recommendation →
          </button>
        </div>
      </div>
    </section>
  );
}
