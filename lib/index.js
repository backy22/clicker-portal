module.exports = ({ wallets, refs, config, client }) => ({
  getCount: () => client.query("counter", { get_count: {} }),
  //increment: (signer = wallets.validator) => client.execute(signer, "counter", { increment: {} }),
  getScores: () => client.query("clicker", { get_scores: {} }),
  getLevel: () => client.query("clicker", { get_level: {} }),

  upsertScore: (score, signer = wallets.validator) =>
    client.execute(signer, "clicker", { upsert_score: { score } }),
});