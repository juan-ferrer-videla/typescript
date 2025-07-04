export const getGreet = (name, age, seniority, options) => {
  const showAge = options?.age ?? true;
  const showSeniority = options?.seniority ?? true;

  const levelsOfSeniority = {
    jr: "Junior",
    sr: "Senior",
    tl: "Tech Lead",
  };

  let greet = `Hello ${name}`;
  if (showAge) greet += `\nYou're ${age} years old`;
  if (showSeniority)
    greet += `\nYour seniority is ${levelsOfSeniority[seniority]}`;

  return greet;
};
