export const getBets = async () => {
  try {
    const res = await fetch('https://nesine-case-study.onrender.com/bets');
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
