// This file contains the core recommendation logic of FinSight AI
// It mimics how a financial advisor would think using rules

export type RiskLevel = "Low" | "Moderate" | "High";

export interface UserInput {
  age: number;
  riskScore: number; // 1 to 10
  timeHorizon: number; // in years
}

export interface PortfolioRecommendation {
  equity: number;
  debt: number;
  cash: number;
  riskLevel: RiskLevel;
  expectedReturn: number;
  volatility: number;
}

/**
 * Main recommendation engine
 * Rule-based, explainable, deterministic
 */
export function getPortfolioRecommendation(
  user: UserInput
): PortfolioRecommendation {
  const { age, riskScore, timeHorizon } = user;

  let equity = 60;

  // RULE 1: Risk-based adjustment
  if (riskScore <= 3) {
    equity = 40;
  } else if (riskScore >= 7) {
    equity = 70;
  }

  // RULE 2: Time horizon adjustment
  if (timeHorizon >= 10 && riskScore >= 6) {
    equity += 5;
  }

  // RULE 3: Age-based safety check
  if (age > 45 && equity > 60) {
    equity = 55;
  }

  // Safety bounds
  equity = Math.max(30, Math.min(equity, 80));

  const cash = 10;
  const debt = 100 - equity - cash;

  // Risk level label
  let riskLevel: RiskLevel = "Moderate";
  if (riskScore <= 3) riskLevel = "Low";
  if (riskScore >= 7) riskLevel = "High";

  // Simple expected return estimation
  const expectedReturn = equity * 0.12 + debt * 0.06 + cash * 0.03;

  // Simple volatility estimation
  const volatility = equity * 0.18 + debt * 0.08 + cash * 0.02;

  return {
    equity,
    debt,
    cash,
    riskLevel,
    expectedReturn: Number((expectedReturn / 100).toFixed(2)),
    volatility: Number((volatility / 100).toFixed(2)),
  };
}
