export type FinailyScoreInput = {
  innovation?: number;
  growth?: number;
  risk?: number;
  policy?: number;
};

export function calculateFinailyScore(input: FinailyScoreInput) {
  const innovation = input.innovation ?? 50;
  const growth = input.growth ?? 50;
  const risk = input.risk ?? 50;
  const policy = input.policy ?? 50;

  return Math.round(
    innovation * 0.35 +
      growth * 0.3 +
      risk * 0.2 +
      policy * 0.15,
  );
}
