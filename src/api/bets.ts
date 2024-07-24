export const getBets = async () => {
  const res = await fetch('https://nesine-case-study.onrender.com/bets');
  return await res.json();
};
// TODO: direkt contextte çağrılabilir.
