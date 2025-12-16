export default function DashboardPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F5F7FF] to-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold text-indigo-600 mb-8">FinSight AI</h1>

        {/* Welcome Card */}
        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
            ↗
          </div>
          <div>
            <p className="font-medium text-gray-800">Welcome back!</p>
            <p className="text-sm text-gray-500">
              Your investment profile is ready.
            </p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
              🛡
            </div>
            <div>
              <p className="text-sm text-gray-500">Risk Level</p>
              <p className="font-medium text-gray-800">Moderate</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
              ⏳
            </div>
            <div>
              <p className="text-sm text-gray-500">Time Horizon</p>
              <p className="font-medium text-gray-800">10–15 years</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
              🎯
            </div>
            <div>
              <p className="text-sm text-gray-500">Goal</p>
              <p className="font-medium text-gray-800">Retirement Planning</p>
            </div>
          </div>
        </div>

        {/* Confidence Score */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
          <div className="flex justify-between mb-3">
            <div>
              <p className="font-medium text-gray-800">Confidence Score</p>
              <p className="text-sm text-gray-500">
                How well the recommendation fits your profile
              </p>
            </div>
            <p className="font-semibold text-gray-800">92%</p>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full"
              style={{ width: "92%" }}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition shadow-md">
            View Recommended Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
