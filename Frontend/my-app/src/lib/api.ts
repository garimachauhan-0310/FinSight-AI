// src/lib/api.ts

export async function fetchRecommendation(data: {
  age: number;
  riskScore: number;
  timeHorizon: number;
}) {
  const response = await fetch("http://localhost:8000/recommend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      age: data.age,
      risk_score: data.riskScore,
      time_horizon: data.timeHorizon,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch recommendation");
  }

  return response.json();
}
