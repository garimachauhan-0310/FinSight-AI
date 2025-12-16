export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      {/* HERO SECTION */}
      <section className="relative px-6 pt-28 pb-24 text-center">
        {/* Soft background blur */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),transparent_60%)]"></div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-200/60 px-4 py-1 text-sm font-medium text-blue-700 backdrop-blur">
          📈 Smart Investment Platform
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          FinSight AI
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg text-gray-700">
          Investment advice you can understand, not just follow.
        </p>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Make confident investment decisions with AI-powered recommendations
          backed by transparent reasoning and personalized risk analysis.
        </p>

        {/* CTA */}
        <button className="mt-10 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl">
          Start Investing Smarter
        </button>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 pb-24">
        <h2 className="mb-14 text-center text-xl font-semibold text-gray-800">
          How it works
        </h2>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
          {/* Card */}
          <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-gray-200 backdrop-blur transition hover:shadow-lg">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              👤
            </div>
            <h3 className="font-semibold text-gray-900">Profile</h3>
            <p className="mt-2 text-sm text-gray-600">
              Share your goals, timeline, and risk tolerance.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-gray-200 backdrop-blur transition hover:shadow-lg">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              🎯
            </div>
            <h3 className="font-semibold text-gray-900">Recommendation</h3>
            <p className="mt-2 text-sm text-gray-600">
              Get personalized investment strategies.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-gray-200 backdrop-blur transition hover:shadow-lg">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              📄
            </div>
            <h3 className="font-semibold text-gray-900">Explanation</h3>
            <p className="mt-2 text-sm text-gray-600">
              Understand the why behind every decision.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 pb-28">
        <h2 className="mb-4 text-center text-xl font-semibold text-gray-800">
          Why choose us
        </h2>
        <p className="mb-14 text-center text-gray-600">
          Investment platforms give you recommendations. We give you
          understanding.
        </p>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
          <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-gray-200 backdrop-blur">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              👁️
            </div>
            <h3 className="font-semibold text-gray-900">Transparent AI</h3>
            <p className="mt-2 text-sm text-gray-600">
              No black-box algorithms. See exactly how recommendations are made.
            </p>
          </div>

          <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-2 ring-green-200 backdrop-blur">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
              📘
            </div>
            <h3 className="font-semibold text-gray-900">
              Human-readable reasoning
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Plain English explanations so you understand the logic, not just
              numbers.
            </p>
          </div>

          <div className="rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-gray-200 backdrop-blur">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
              🛡️
            </div>
            <h3 className="font-semibold text-gray-900">
              Risk-aware decisions
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Personalized risk assessment tailored to your comfort and goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
